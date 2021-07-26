const getSleepHours = day => {
    switch (day) {
      case 'Monday':
      return 8;
      case 'Tuesday':
      return 7;
      case 'Wednesday':
      return 6;
      case 'Thursday':
      return 5;
      case 'Friday':
      return 4;
      case 'Saturday':
      return 3;
      case 'Sunday':
      return 2;
      break;
    }
  }
  
  const getActualSleepHours = () => 
    8 + 8 + 8 + 8 + 8 + 8 + 8;
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const getIdealSleepHours = idealHours => idealHours * 7;
    const idealSleepHours = getIdealSleepHours(8);
    if (actualSleepHours === idealSleepHours) {
      console.log('got the perfect amount of sleep');
    } else if (actualSleepHours > idealSleepHours) {
      console.log('got ' + (actualSleepHours - idealSleepHours) + ' hours more sleep than needed');
    } else {
      console.log('should get ' + (idealSleepHours - actualSleepHours) + ' hours rest');
    }
  }
  
  calculateSleepDebt();