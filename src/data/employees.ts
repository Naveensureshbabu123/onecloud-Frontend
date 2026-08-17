import type { Employee } from "../types/employee";

const employees: Employee[] = [
    {
        id: 1,
        name: "Naveen",
        email: "naveen@onecloud.com",
        department: "Development",
        designation: "Frontend Developer",
        photo: "https://picsum.photos/id/1005/100/100",
        status: "Active",
        mobile: "9876543210",
        joiningDate: "15-06-2023"
    },
    {
        id: 2,
        name: "Shruthi",
        email: "shruthi@onecloud.com",
        department: "HR",
        designation: "HR Manager",
        photo: "https://picsum.photos/id/1011/100/100",
        status: "Active",
        mobile: "9876543211",
        joiningDate: "20-06-2023"
    },
    {
        id: 3,
        name: "Kishore",
        email: "kishore@onecloud.com",
        department: "Finance",
        designation: "Accountant",
        photo: "https://picsum.photos/id/1012/100/100",
        status: "Inactive",
        mobile: "9876543212",
        joiningDate: "10-07-2023"
    },
    {
        id: 4,
        name: "Karthik",
        email: "karthik@onecloud.com",
        department: "CRM",
        designation: "CRM Executive",
        photo: "https://picsum.photos/id/1013/100/100",
        status: "Active",
        mobile: "9876543213",
        joiningDate: "18-07-2023"
    },
    {
        id: 5,
        name: "Anitha",
        email: "anitha@onecloud.com",
        department: "Development",
        designation: "Backend Developer",
        photo: "https://picsum.photos/id/1014/100/100",
        status: "Active",
        mobile: "9876543214",
        joiningDate: "25-07-2023"
    },
    {
        id: 6,
        name: "Arun",
        email: "arun@onecloud.com",
        department: "Finance",
        designation: "Finance Executive",
        photo: "https://picsum.photos/id/1015/100/100",
        status: "Active",
        mobile: "9876543215",
        joiningDate: "01-08-2023"
    },
    {
        id: 7,
        name: "Priya",
        email: "priya@onecloud.com",
        department: "HR",
        designation: "HR Executive",
        photo: "https://picsum.photos/id/1016/100/100",
        status: "Inactive",
        mobile: "9876543216",
        joiningDate: "05-08-2023"
    },
    {
        id: 8,
        name: "Vignesh",
        email: "vignesh@onecloud.com",
        department: "Development",
        designation: "Full Stack Developer",
        photo: "https://picsum.photos/id/1018/100/100",
        status: "Active",
        mobile: "9876543217",
        joiningDate: "12-08-2023"
    },
    {
        id: 9,
        name: "Meena",
        email: "meena@onecloud.com",
        department: "CRM",
        designation: "CRM Manager",
        photo: "https://picsum.photos/id/1020/100/100",
        status: "Active",
        mobile: "9876543218",
        joiningDate: "20-08-2023"
    },
    {
        id: 10,
        name: "Harish",
        email: "harish@onecloud.com",
        department: "Finance",
        designation: "Auditor",
        photo: "https://picsum.photos/id/1024/100/100",
        status: "Inactive",
        mobile: "9876543219",
        joiningDate: "25-08-2023"
    },
    {
        id: 11,
        name: "Deepa",
        email: "deepa@onecloud.com",
        department: "Development",
        designation: "UI Designer",
        photo: "https://picsum.photos/id/1025/100/100",
        status: "Active",
        mobile: "9876543220",
        joiningDate: "01-09-2023"
    },
    {
        id: 12,
        name: "Sanjay",
        email: "sanjay@onecloud.com",
        department: "CRM",
        designation: "Sales Executive",
        photo: "https://picsum.photos/id/1026/100/100",
        status: "Active",
        mobile: "9876543221",
        joiningDate: "10-09-2023"
    },
    {
        id: 13,
        name: "Lavanya",
        email: "lavanya@onecloud.com",
        department: "HR",
        designation: "Recruiter",
        photo: "https://picsum.photos/id/1027/100/100",
        status: "Active",
        mobile: "9876543222",
        joiningDate: "15-09-2023"
    },
    {
        id: 14,
        name: "Ravi",
        email: "ravi@onecloud.com",
        department: "Development",
        designation: "Software Engineer",
        photo: "https://picsum.photos/id/1028/100/100",
        status: "Inactive",
        mobile: "9876543223",
        joiningDate: "20-09-2023"
    },
    {
        id: 15,
        name: "Keerthana",
        email: "keerthana@onecloud.com",
        department: "Finance",
        designation: "Finance Manager",
        photo: "https://picsum.photos/id/1029/100/100",
        status: "Active",
        mobile: "9876543224",
        joiningDate: "01-10-2023"
    },
    {
        id: 16,
        name: "Ajith",
        email: "ajith@onecloud.com",
        department: "CRM",
        designation: "Customer Support",
        photo: "https://picsum.photos/id/1040/100/100",
        status: "Active",
        mobile: "9876543225",
        joiningDate: "10-10-2023"
    },
    {
        id: 17,
        name: "Divya",
        email: "divya@onecloud.com",
        department: "Development",
        designation: "QA Engineer",
        photo: "https://picsum.photos/id/1031/100/100",
        status: "Inactive",
        mobile: "9876543226",
        joiningDate: "15-10-2023"
    },
    {
        id: 18,
        name: "Prakash",
        email: "prakash@onecloud.com",
        department: "HR",
        designation: "Training Coordinator",
        photo: "https://picsum.photos/id/1032/100/100",
        status: "Active",
        mobile: "9876543227",
        joiningDate: "20-10-2023"
    },
    {
        id: 19,
        name: "Monisha",
        email: "monisha@onecloud.com",
        department: "Development",
        designation: "React Developer",
        photo: "https://picsum.photos/id/1033/100/100",
        status: "Active",
        mobile: "9876543228",
        joiningDate: "01-11-2023"
    },
    {
        id: 20,
        name: "Surya",
        email: "surya@onecloud.com",
        department: "Finance",
        designation: "Tax Consultant",
        photo: "https://picsum.photos/id/1035/100/100",
        status: "Inactive",
        mobile: "9876543229",
        joiningDate: "10-11-2023"
    }
];

export default employees;