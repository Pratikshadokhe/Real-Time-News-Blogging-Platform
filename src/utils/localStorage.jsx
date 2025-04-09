
const user = [
    {
        "id": 1,
        "firstName": "Rahul",
        "name": "Rahul Sharma",
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "taskTitle": "Prepare Monthly Report",
                "taskDescription": "Compile financial and performance reports for the month.",
                "taskDate": "2025-03-15",
                "category": "Reporting"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "taskTitle": "Update Client Records",
                "taskDescription": "Ensure all client details are up-to-date in the system.",
                "taskDate": "2025-03-10",
                "category": "Data Management"
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 2,
        "firstName": "Priya",
        "name": "Priya Verma",
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "taskTitle": "Schedule Team Meeting",
                "taskDescription": "Organize a weekly meeting with the project team.",
                "taskDate": "2025-03-12",
                "category": "Management"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "taskTitle": "Review Codebase",
                "taskDescription": "Check the code for security vulnerabilities.",
                "taskDate": "2025-03-08",
                "category": "Development"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "taskTitle": "Write API Documentation",
                "taskDescription": "Create documentation for the new API endpoints.",
                "taskDate": "2025-03-14",
                "category": "Documentation"
            }
        ],
        "taskNumbers": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 3
        }
    },
    {
        "id": 3,
        "firstName": "Amit",
        "name": "Amit Kumar",
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "taskTitle": "Fix UI Bugs",
                "taskDescription": "Resolve layout and styling issues in the dashboard.",
                "taskDate": "2025-03-16",
                "category": "Development"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "taskTitle": "Optimize Database Queries",
                "taskDescription": "Improve query performance to reduce load time.",
                "taskDate": "2025-03-10",
                "category": "Database"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "taskTitle": "Deploy New Features",
                "taskDescription": "Push new updates to the production server.",
                "taskDate": "2025-03-18",
                "category": "Deployment"
            }
        ],
        "taskNumbers": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 1
        }
    },
    {
        "id": 4,
        "firstName": "Neha",
        "name": "Neha Reddy",
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "taskTitle": "Finalize Budget Proposal",
                "taskDescription": "Complete the budget plan for Q2.",
                "taskDate": "2025-03-05",
                "category": "Finance"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "taskTitle": "Plan Marketing Campaign",
                "taskDescription": "Design a campaign strategy for the upcoming product launch.",
                "taskDate": "2025-03-20",
                "category": "Marketing"
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 2
        }
    },
    {
        "id": 5,
        "firstName": "Rohan",
        "name": "Rohan Mehta",
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "taskTitle": "Write Blog Post",
                "taskDescription": "Draft an article on industry trends.",
                "taskDate": "2025-03-14",
                "category": "Content Creation"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "taskTitle": "Analyze Competitor Data",
                "taskDescription": "Compare product performance with competitors.",
                "taskDate": "2025-03-09",
                "category": "Research"
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 0,
            "completed": 1,
            "failed": 1
        }
    }
  ];
  
  const admin = [
    {
        "id": 1,
        "firstName": "Arjun",
        "name": "Arjun Singh",
        "email": "admin@example.com",
        "password": "123"
    }
  ];
  
  export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
  }
  
  export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));
  
    return { employees, admin };
  }
  