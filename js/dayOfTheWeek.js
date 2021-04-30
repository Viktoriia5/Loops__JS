function dayOfTheWeek(){
    let repeat = true;
    let i = 0;
     do{
         const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

         repeat = confirm(`${days[i]}\n Do you want to contionue?`);
         i = ++i % days.length;
     } while(repeat)
}