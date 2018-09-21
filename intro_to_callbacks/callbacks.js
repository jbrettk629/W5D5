class Clock {
  constructor() {
    // 1. Create a Date object.
    const date = new Date();
    // 2. Store the hours, minutes, and seconds.
    this.hrs = date.getHours();
    this.mins = date.getMinutes();
    this.secs = date.getSeconds();
  
    // 3. Call printTime.
    this.printTime();
    // 4. Schedule the tick at 1 second intervals.
    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
   // Format the time in HH:MM:SS
   const time = [this.hrs, this.mins, this.secs].join(':');
   // Use console.log to print it.
   console.log(time);
  }

  _tick() {
    // 1. Increment the time by one second.
    this.secs += 1;
    if (this.secs === 60) {
      this.secs = 0;
      this.mins += 1;
      if (this.mins === 60) {
        this.mins = 60;
        this.hrs += 1;
        this.hrs = this.hrs % 24;
      }
    }

    this.printTime();
    // 2. Call printTime.
  }
}

const clock = new Clock();
