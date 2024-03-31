import { StudentClass } from "./heranca";

const studentClass = new StudentClass("Italo", "M4")
studentClass.sayMyName();
studentClass.sayMyModule();


// exemplo polimorfismo
import { Teacher } from "./polimorfismo";

const teacher = new Teacher("Italo");
teacher.sayMyName();