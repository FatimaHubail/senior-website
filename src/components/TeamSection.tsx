import { GraduationCap, Mail, Linkedin, Github, User } from "lucide-react";

const students = [
  {
    name: "Fatema Abdulla Hubail",
    major: "Computer Science",
    email: "fhubail03@gmail.com",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Alya Shawqi Alshameri",
    major: "Computer Science",
    email: "alyaalshameri@gmail.com",
    linkedin: "#",
    github: "#",
  },
];

const supervisor = {
  name: "Dr. Mohamed Mazin Almadhaeedi",
  rank: "Assistant Professor",
  department: "Computer Science",
  email: "mmazin@uob.edu.bh",
};

const TeamSection = () => {
  return (
    <section id="team" className="section-container">
      <div className="text-center mb-12">
        <h2 className="section-title">About the Project & Team</h2>
        <p className="section-subtitle mx-auto">
          Meet the dedicated team behind Phoneme
        </p>
      </div>

      {/* Project Info */}
      <div className="card-soft max-w-4xl mx-auto mb-12 border-l-4 border-primary">
        <p className="text-foreground leading-relaxed">
          This project is a Final Year Senior Project completed during Semester 1 of the 
          Academic Year 2025/2026 at the College of Information Technology — University of Bahrain.
        </p>
      </div>

      {/* Students Table */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-foreground">Project Team</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 font-semibold text-foreground">Name</th>
                <th className="text-left py-4 px-4 font-semibold text-foreground">Major</th>
                <th className="text-left py-4 px-4 font-semibold text-foreground">Email</th>
                <th className="text-left py-4 px-4 font-semibold text-foreground">Links</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                        <User className="w-5 h-5 text-secondary-foreground" />
                      </div>
                      <span className="font-medium text-foreground">{student.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-muted-foreground">{student.major}</td>
                  <td className="py-4 px-4">
                    <a href={`mailto:${student.email}`} className="text-primary hover:underline text-sm">
                      {student.email}
                    </a>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <a href={student.linkedin} className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/10 transition-colors">
                        <Linkedin className="w-4 h-4 text-muted-foreground" />
                      </a>
                      <a href={student.github} className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/10 transition-colors">
                        <Github className="w-4 h-4 text-muted-foreground" />
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Supervisor */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-highlight/10 flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-highlight" />
          </div>
          <h3 className="text-xl font-semibold text-foreground">Project Supervisor</h3>
        </div>

        <div className="card-soft max-w-md">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-highlight/10 flex items-center justify-center">
              <User className="w-8 h-8 text-highlight" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground">{supervisor.name}</h4>
              <p className="text-sm text-muted-foreground mb-1">{supervisor.rank}</p>
              <p className="text-sm text-muted-foreground mb-1">{supervisor.department}</p>
              <a href={`mailto:${supervisor.email}`} className="text-primary hover:underline text-sm flex items-center gap-1">
                <Mail className="w-3 h-3" />
                {supervisor.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
