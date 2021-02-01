class Teacher{
    constructor(name,teacherId){
        this.name = name;
        this.teacherId = teacherId;
    }

    intro(){
        console.log('我是' + this.name + ', teacherId为：' + this.teacherId);
    }
}
const tea = new Teacher('李老师', '1001');
tea.intro();
 
class Professor extends Teacher{
    constructor(name, teacherId, territory){
        super(name, teacherId);
        this.territory = territory;
    }

    intro(){
        console.log('我是' + this.name + ', teacherId为：' + this.teacherId + '，主攻' + this.territory + '领域');
    }
}

const pro = new Professor('王老师','1002', '数学');
pro.intro();