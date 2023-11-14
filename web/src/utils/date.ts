export const formatDate = (dateInput: string) => {
    const currentDate = new Date();
    const inputDate = new Date(dateInput);
    const timeDiffSeconds = Math.floor(
      (currentDate.getTime() - inputDate.getTime()) / 1000
    );
  
    if (timeDiffSeconds < 60) {
      return `${timeDiffSeconds} second${timeDiffSeconds === 1 ? '' : 's'} ago`;
    }
  
    const timeDiffMinutes = Math.floor(timeDiffSeconds / 60);
  
    if (timeDiffMinutes < 60) {
      return `${timeDiffMinutes} minute${timeDiffMinutes === 1 ? '' : 's'} ago`;
    }
  
    const timeDiffHours = Math.floor(timeDiffMinutes / 60);
  
    if (timeDiffHours < 24) {
      return `${timeDiffHours} hour${timeDiffHours === 1 ? '' : 's'} ago`;
    }
  
    const timeDiffDays = Math.floor(timeDiffHours / 24);
  
    if (timeDiffDays < 1) {
      return `1 day ago`;
    }
    else if (timeDiffDays < 365) {
      return `${timeDiffDays} day${timeDiffDays === 1 ? '' : 's'} ago`;
    }
  
    const timeDiffYears = Math.floor(timeDiffDays / 365);
  
    return `${timeDiffYears} year${timeDiffYears === 1 ? '' : 's'} ago`;
  };
  