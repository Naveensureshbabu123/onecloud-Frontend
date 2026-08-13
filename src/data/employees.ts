export interface Employee {
    id: number;
    name: string;
    department: string;
    designation: string;
    email: string;
    status: "Active" | "Inactive";
    photo: string;
}

const employees: Employee[] = [
    {
        id: 1,
        name: "Naveen",
        department: "Development",
        designation: "Frontend Developer",
        email: "naveen@onecloud.com",
        status: "Active",
        photo: "https://picsum.photos/id/1005/100/100"
    },
    {
        id: 2,
        name: "Shruthi",
        department: "HR",
        designation: "HR Manager",
        email: "shruthi@onecloud.com",
        status: "Active",
        photo: "https://picsum.photos/id/1011/100/100"
    },
    {
        id: 3,
        name: "Kishore",
        department: "Finance",
        designation: "Accountant",
        email: "kishore@onecloud.com",
        status: "Inactive",
        photo: "https://picsum.photos/id/1012/100/100"
    },
    {
        id: 4,
        name: "Karthik",
        department: "CRM",
        designation: "CRM Executive",
        email: "karthik@onecloud.com",
        status: "Active",
        photo: "https://picsum.photos/id/1013/100/100"
    },
    {
        id: 5,
        name: "Anitha",
        department: "Development",
        designation: "Backend Developer",
        email: "anitha@onecloud.com",
        status: "Active",
        photo: "https://picsum.photos/id/1014/100/100"
    },
    {
        id: 6,
        name: "Arun",
        department: "Finance",
        designation: "Finance Executive",
        email: "arun@onecloud.com",
        status: "Active",
        photo: "https://picsum.photos/id/1015/100/100"
    },
    {
        id: 7,
        name: "Priya",
        department: "HR",
        designation: "HR Executive",
        email: "priya@onecloud.com",
        status: "Inactive",
        photo: "https://picsum.photos/id/1016/100/100"
    },
    {
        id: 8,
        name: "Vignesh",
        department: "Development",
        designation: "Full Stack Developer",
        email: "vignesh@onecloud.com",
        status: "Active",
        photo: "https://picsum.photos/id/1018/100/100"
    },
    {
        id: 9,
        name: "Meena",
        department: "CRM",
        designation: "CRM Manager",
        email: "meena@onecloud.com",
        status: "Active",
        photo: "https://picsum.photos/id/1020/100/100"
    },
    {
        id: 10,
        name: "Harish",
        department: "Finance",
        designation: "Auditor",
        email: "harish@onecloud.com",
        status: "Inactive",
        photo: "https://picsum.photos/id/1024/100/100"
    },
    {
        id: 11,
        name: "Deepa",
        department: "Development",
        designation: "UI Designer",
        email: "deepa@onecloud.com",
        status: "Active",
        photo: "https://picsum.photos/id/1025/100/100"
    },
    {
        id: 12,
        name: "Sanjay",
        department: "CRM",
        designation: "Sales Executive",
        email: "sanjay@onecloud.com",
        status: "Active",
        photo: "https://picsum.photos/id/1026/100/100"
    },
    {
        id: 13,
        name: "Lavanya",
        department: "HR",
        designation: "Recruiter",
        email: "lavanya@onecloud.com",
        status: "Active",
        photo: "https://picsum.photos/id/1027/100/100"
    },
    {
        id: 14,
        name: "Ravi",
        department: "Development",
        designation: "Software Engineer",
        email: "ravi@onecloud.com",
        status: "Inactive",
        photo: "https://picsum.photos/id/1028/100/100"
    },
    {
        id: 15,
        name: "Keerthana",
        department: "Finance",
        designation: "Finance Manager",
        email: "keerthana@onecloud.com",
        status: "Active",
        photo: "https://picsum.photos/id/1029/100/100"
    },
    {
        id: 16,
        name: "Ajith",
        department: "CRM",
        designation: "Customer Support",
        email: "ajith@onecloud.com",
        status: "Active",
        photo: "https://picsum.photos/id/1040/100/100"
    },
    {
        id: 17,
        name: "Divya",
        department: "Development",
        designation: "QA Engineer",
        email: "divya@onecloud.com",
        status: "Inactive",
        photo: "https://picsum.photos/id/1031/100/100"
    },
    {
        id: 18,
        name: "Prakash",
        department: "HR",
        designation: "Training Coordinator",
        email: "prakash@onecloud.com",
        status: "Active",
        photo: "https://picsum.photos/id/1032/100/100"
    },
    {
        id: 19,
        name: "Monisha",
        department: "Development",
        designation: "React Developer",
        email: "monisha@onecloud.com",
        status: "Active",
        photo: "https://picsum.photos/id/1033/100/100"
    },
    {
        id: 20,
        name: "Surya",
        department: "Finance",
        designation: "Tax Consultant",
        email: "surya@onecloud.com",
        status: "Inactive",
        photo: "https://picsum.photos/id/1035/100/100"
    }
];

export default employees;