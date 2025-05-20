export interface ProjectType {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  image?: string;
}

export const projects: ProjectType[] = [
  {
    title: "Employee-Management-System",
    description: "A comprehensive web-based application for user management and database interaction. This project was developed as part of the GDG On Campus Zagazig Tasks. It utilizes PHP for server-side scripting and integrates with a MySQL database, showcasing core principles of web development, including form handling, data validation, and CRUD operations. Through this project, we gained practical experience in backend development, database design, and secure data processing — essential skills in backend web development.",
    tags: ["PHP","Javascript","Database"],
    github: "https://github.com/yaserbelal/Employee-Management-System",
  },
  {
    title: "Quran-Playlist-Manager",
    description: "A comprehensive console-based application for managing playlists. This project was developed as part of the 2024 Data Structures course at Zagazig University. It leverages a custom-built Double linked list data structure, showcasing a range of object-oriented programming (OOP) principles. This project provided hands-on experience with data structure design, algorithm efficiency, and OOP concepts, allowing for both learning and practical application of these key software engineering skills.",
    tags: ["C++", "Data Structures", "OOP", "Console Application"],
    github: "https://github.com/yaserbelal/Quran_Playlist_Manager",
  },
  {
    title: "Contact Book",
    description: "A comprehensive console-based application for managing contact information. This project was developed as part of the 2024 Data Structures course at Zagazig University. It leverages a custom-built array data structure, showcasing a range of object-oriented programming (OOP) principles. This project provided hands-on experience with data structure design, algorithm efficiency, and OOP concepts, allowing for both learning and practical application of these key software engineering skills.",
    tags: ["C++", "Data Structures", "OOP", "Console Application"],
    github: "https://github.com/yaserbelal/Contacts_Book",
  }
]; 