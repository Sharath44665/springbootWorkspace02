const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const options = {year: 'numeric' as const, month: 'short' as const}

    return date.toLocaleString('en-US', options)
}
function timeAgo(time: string) {
    const now = new Date();
    const postDate = new Date(time);
    const diff = now.getTime()-postDate.getTime()

    const seconds = Math.floor(diff/1000)
    const minutes = Math.floor(seconds/60)
    const hours = Math.floor(minutes/60)
    const days = Math.floor(hours/24)
    const months = Math.floor(days/30)

    if(seconds <60){
        return `${seconds} seconds ago`
    }
    else if (minutes <60){
        return `${minutes} minutes ago`
    }
    else if (hours<24){
        return `${hours} hours ago`
    }
    else if (days<30){
        return `${days} days ago`
    }
    else {
        return `${months} months ago`
    }
} 

const getBase64 = (file:any)=> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = error => reject(error);
    })
}

const formatInterviewTime = (dateString:any)=> {
    // Create a new Date object from the input string
    const date = new Date(dateString);

    // Define options for formatting the date
    const options:Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: '2-digit' };
    
    // Format the date
    const formattedDate = date.toLocaleString('en-us', options)
    
    // Get hours and minutes
    let hours = date.getHours();
    const minutes = date.getMinutes();
    
    // Determine AM or PM suffix
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    
    // Format minutes to always have two digits
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

    // Combine everything into the final format
    return `${formattedDate} on Time: ${hours}:${formattedMinutes} ${ampm}`;
}

const openBase64PDF = (base64String:string) =>{
    const byteCharecters = atob(base64String)
    const byteNumbers = new Array(byteCharecters.length)

    for (let i=0; i< byteCharecters.length; i++){
        byteNumbers[i] = byteCharecters.charCodeAt(i)
    }

    const byteArray = new Uint8Array(byteNumbers)
    const blob = new Blob([byteArray], {type:'application/pdf'})
    const blobUrl = URL.createObjectURL(blob)
    window.open(blobUrl, '_blank')
}

export {formatDate, timeAgo, getBase64, formatInterviewTime, openBase64PDF};