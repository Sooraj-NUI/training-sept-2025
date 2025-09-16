const people = [
  { id: "p1", name: "Arun", email: "arun@example.com", capacityHrsPerDay: 6 },
  { id: "p2", name: "Uma", email: "uma@", capacityHrsPerDay: 5 }, // invalid email
  {
    id: "p3",
    name: "Aadhir",
    email: "aadhir@example.com",
    capacityHrsPerDay: 4,
  },
  { id: "p4", name: "Aarik", email: "aarik@example.com", capacityHrsPerDay: 0 }, // edge: zero capacity
];
const todos = [
  // id, title, estimateHrs, priority, status, due(YYYY-MM-DD), assigneeId?, dependsOn?
  {
    id: "t1",
    title: "Setup repo",
    estimateHrs: 2,
    priority: "high",
    status: "done",
    due: "2025-09-16",
    assigneeId: "p1",
  },
  {
    id: "t2",
    title: "Scaffold UI",
    estimateHrs: 5,
    priority: "high",
    status: "in-progress",
    due: "2025-09-18",
    assigneeId: "p1",
    dependsOn: ["t1"],
  },
  {
    id: "t3",
    title: "Build login",
    estimateHrs: 8,
    priority: "medium",
    status: "todo",
    due: "2025-09-20",
    assigneeId: "p2",
  },
  {
    id: "t4",
    title: "Payments integration",
    estimateHrs: 13,
    priority: "high",
    status: "todo",
    due: "2025-09-19",
    assigneeId: "p2",
    dependsOn: ["t3"],
  },
  {
    id: "t5",
    title: "Notifications",
    estimateHrs: 3,
    priority: "low",
    status: "todo",
    due: "2025-09-25",
    assigneeId: null,
  }, // unassigned
  {
    id: "t6",
    title: "Profile screen",
    estimateHrs: 5,
    priority: "medium",
    status: "in-progress",
    due: "2025-09-21",
    assigneeId: "p3",
  },
  {
    id: "t7",
    title: "Accessibility pass",
    estimateHrs: 2,
    priority: "medium",
    status: "todo",
    due: "2025-09-15",
    assigneeId: "p3",
  }, // overdue (today is 2025-09-15 IST)
  {
    id: "t8",
    title: "Error monitoring",
    estimateHrs: 4,
    priority: "low",
    status: "todo",
    due: "2025-09-23",
    assigneeId: "p4",
  }, // zero-capacity assignee
  {
    id: "t9",
    title: "Build login",
    estimateHrs: 8,
    priority: "medium",
    status: "todo",
    due: "2025-09-20",
    assigneeId: "p2",
  }, // duplicate title
  {
    id: "t10",
    title: "Refactor utils",
    estimateHrs: 3,
    priority: "low",
    status: "done",
    due: "2025-09-14",
    assigneeId: "p1",
  }, // done but due in past
  {
    id: "t11",
    title: "Release v1",
    estimateHrs: 6,
    priority: "high",
    status: "blocked",
    due: "2025-09-22",
    assigneeId: "p2",
    dependsOn: ["t4", "t6"],
  },
  {
    id: "t12",
    title: "Data migration",
    estimateHrs: 7,
    priority: "high",
    status: "todo",
    due: "2025-09-28",
    assigneeId: "p3",
    dependsOn: ["t4", "t99"],
  }, // missing dep t99
  {
    id: "t13",
    title: "Cycle check A",
    estimateHrs: 1,
    priority: "low",
    status: "todo",
    due: "2025-09-30",
    assigneeId: "p3",
    dependsOn: ["t14"],
  },
  {
    id: "t14",
    title: "Cycle check B",
    estimateHrs: 1,
    priority: "low",
    status: "todo",
    due: "2025-09-30",
    assigneeId: "p3",
    dependsOn: ["t13"],
  },
];

function todosWithNotLowPriority(todos) {
  const peopleWithNotLowPriorityStatusNotDone = todos.filter(
    (todo) => todo.priority !== "low" && todo.status !== "done"
  );
  return peopleWithNotLowPriorityStatusNotDone.map((item) => ({
    id: item.id,
    title: item.title,
    assigneeId: item.assigneeId,
  }));
}
console.log(todosWithNotLowPriority(todos));

function findPersonDetails(people) {
  const peopleDetails = people.map((person) => {
    email = person.email;
    if (isValidMailId(email)) {
      return `${person.name} <${email}>`;
    } else {
      return `${person.name} <${email}> (INVALID EMAIL)`;
    }
  });
  return peopleDetails;
}
console.log(findPersonDetails(people));

function isValidMailId(mailId) {
  if (!mailId || typeof mailId !== "string") {
    return false;
  }
  const parts = mailId.split("@");
  if (parts.length !== 2) {
    return false;
  }
  const [local, domain] = parts;

  if (!local || !domain) {
    return false;
  }
  const domainCo = domain.split(".").pop();
  if (domainCo.length < 2) {
    return false;
  }
  if (mailId.startsWith(".") || mailId.endsWith(".")) {
    return false;
  }
  return true;
}

function findTotalEstimatedHours(people, todos) {
  let result = [];

  todos.forEach((todo) => {
    if (todo.status !== "done") {
      const matchedPerson = people.find(
        (person) => person.id === todo.assigneeId
      );
      let personName;
      if (matchedPerson) {
        personName = matchedPerson.name;
      } else {
        personName = "Unassigned";
      }
      let existing = result.find((p) => p.person === personName);

      if (existing) {
        existing.hrs += todo.estimateHrs;
      } else {
        result.push({ person: personName, hrs: todo.estimateHrs, id: todo.id });
      }
    }
  });
  return result;
}
console.log(findTotalEstimatedHours(people, todos));

function findTaskWithDueDateToday(todos, people) {
  const personNames = {};
  people.map((person) => {
    personNames[person.id] = person.name;
  });
  const todayDate = new Date();
  const pendingTask = [];
  for (const todo of todos) {
    if (todo.status.toLowerCase() !== "done") {
      const dueDate = new Date(todo.due);
      if (dueDate <= todayDate) {
        pendingTask.push({
          id: todo.id,
          title: todo.title,
          assignName: personNames[todo.assigneeId],
          due: todo.due,
        });
      }
    }
  }
  return pendingTask;
}
console.log(findTaskWithDueDateToday(todos, people));

function findWorkLoadCapacity(todos, people) {
  const totalEstimatedHours = findTotalEstimatedHours(people, todos);
  const results = [];

  totalEstimatedHours.forEach((item) => {
    const person = item.person;
    const hours = item.hrs;

    const matchedPerson = people.find((p) => p.name === person);
    let dailyCapacity;
    if (matchedPerson) {
      dailyCapacity = matchedPerson.capacityHrsPerDay;
    } else {
      dailyCapacity = 0;
    }
    const sprintCapacity = dailyCapacity * 5;
    if (hours > sprintCapacity) {
      results.push(
        `${person} - OVER-ALLOCATED by ${
          hours - sprintCapacity
        } hrs (capacity ${sprintCapacity})`
      );
    } else {
      results.push(`${person} - OK `);
    }
  });
  return results;
}
findWorkLoadCapacity(todos, people);

function isDependent(todo) {
  return Array.isArray(todo.dependsOn) && todo.dependsOn.length > 0;
}

function findInvalidDependencyTask(todos, people) {
  const validTaskIds = [];
  const tasksWithInvalidDependency = [];
  people.map((item) => {
    if (!validTaskIds.includes(item.id)) {
      validTaskIds.push(item.id);
    }
  });

  const taskWithDependency = todos.filter(isDependent);

  for (let task of taskWithDependency) {
    const invalidDependencyTask = task.dependsOn.filter(
      (taskID) => !validTaskIds.includes(taskID)
    );
    if (invalidDependencyTask.length > 0) {
      tasksWithInvalidDependency.push({
        id: task.id,
        title: task.title,
        dependsOn: task.dependsOn,
      });
    }
  }
  return tasksWithInvalidDependency;
}
console.log(findInvalidDependencyTask(todos, people));

function findTaskWithSameTitle(todos) {
  const uniqueTitle = [];
  todos.map((todo) => {
    if (!uniqueTitle.includes(todo.title)) {
      uniqueTitle.push(todo.title);
    }
  });

  const finalObj = {};
  uniqueTitle.map((title) => {
    todos.map((todo) => {
      if (title === todo.title) {
        if (!finalObj[title]) {
          finalObj[title] = [];
        }
        finalObj[title].push(todo.id);
      }
    });
  });
  for (let item in finalObj) {
    if (finalObj[item].length > 1) {
      return { [item]: finalObj[item] };
    }
  }
}
console.log(findTaskWithSameTitle(todos));



function sortPriorityWise(todos) {
  const highPriority = [];
  const mediumPriority = [];
  const lowPriority = [];

  function canStart(task) {
    if (!task.dependsOn || task.dependsOn.length === 0) {
      return true;
    }

    for (let i = 0; i < task.dependsOn.length; i++) {
      let depId = task.dependsOn[i];
      let depTask = todos.find((t) => t.id === depId);
      if (depTask && depTask.status.toLowerCase() !== "done") {
        return false;
      }
    }
    return true;
  }

  todos.map((todo) => {
    if (
      todo.priority.toLowerCase() === "high" &&
      todo.status.toLowerCase() !== "done" &&
      todo.status.toLowerCase() !== "blocked"
    ) {
      highPriority.push(todo);
    }
    if (
      todo.priority.toLowerCase() === "medium" &&
      todo.status.toLowerCase() !== "done" &&
      todo.status.toLowerCase() !== "blocked"
    ) {
      mediumPriority.push(todo);
    }
    if (
      todo.priority.toLowerCase() === "low" &&
      todo.status.toLowerCase() !== "done" &&
      todo.status.toLowerCase() !== "blocked"
    ) {
      lowPriority.push(todo);
    }
  });

  const startable = [];
  highPriority.map((t) => {
    if (canStart(t)) startable.push(t);
  });
  mediumPriority.map((t) => {
    if (canStart(t)) startable.push(t);
  });
  lowPriority.map((t) => {
    if (canStart(t)) startable.push(t);
  });

  startable.sort((a, b) => {
    const priorityOrder = { high: 1, medium: 2, low: 3 };
    let prioDiff =
      priorityOrder[a.priority.toLowerCase()] -
      priorityOrder[b.priority.toLowerCase()];
    if (prioDiff !== 0) return prioDiff;

    let dueDiff = new Date(a.due) - new Date(b.due);
    if (dueDiff !== 0) return dueDiff;

    return a.estimateHrs - b.estimateHrs;
  });
  return startable.map((t) => t.id);
}
console.log(sortPriorityWise(todos));

function reassignBasedOnCapacity(todos, people) {
  const totalEstimatedHours = findTotalEstimatedHours(people, todos);
  const results = [];
  const finalArray = [];
  let allocatedUser = {};

  totalEstimatedHours.forEach((item) => {
    const person = item.person;
    const hours = item.hrs;

    const matchedPerson = people.find((p) => p.name === person);
    let dailyCapacity;
    if (matchedPerson) {
      dailyCapacity = matchedPerson.capacityHrsPerDay;
    } else {
      dailyCapacity = 0;
    }
    const sprintCapacity = dailyCapacity * 5;
    if (hours > sprintCapacity) {
      results.push({
        name: person,
        overAllocatedTime: hours - sprintCapacity,
        capacity: sprintCapacity,
        overAllocated: true,
        todo: item.id,
      });
    } else {
      results.push({
        name: person,
        freeTime: sprintCapacity - hours,
        capacity: sprintCapacity,
        overAllocated: false,
      });
    }
  });
  const userWithNonZeroCapacity = [];
  const userWithZeroCapacity = [];
  results.map((item) => {
    if (item.capacity !== 0 && item.overAllocated === false) {
      userWithNonZeroCapacity.push(item);
    }
    if (item.capacity === 0 && item.overAllocatedTime !== 0) {
      userWithZeroCapacity.push(item);
    }
  });

  let maxValue = 0;
  let personWithMaxValue = "";
  userWithNonZeroCapacity.map((item) => {
    if (item.freeTime > maxValue) {
      maxValue = item.freeTime;
      personWithMaxValue = item.name;
    }
  });

  let personWithZeroCapacity = "";
  let personTask = "";
  userWithZeroCapacity.map((item) => {
    if (item.capacity === 0) {
      personWithZeroCapacity = item.name;
      personTask = item.todo;
    }
  });
  allocatedUser = {
    todoId: personTask,
    fromPerson: personWithZeroCapacity,
    toPersonSuggested: personWithMaxValue,
  };
  finalArray.push(allocatedUser);
  return finalArray;
}
console.log(reassignBasedOnCapacity(todos, people));


function checkDependency(todos) {
  dependencyids = [];
  todos.map((item) => {
    if (item.dependsOn !== undefined && item.status.toLowerCase() === "todo") {
      dependencyids.push(item);
    }
  });

  dependencyids.map((item) => {
    let stack = [item.id];
    item.dependsOn.map((depId) => {
      let depTask = todos.find((t) => t.id === depId);
      if (depTask) {
        if (stack.includes(depTask.id)) {
            return [...stack, depTask.id];
        }
      }
    });
  });
}
console.log(checkDependency(todos));
