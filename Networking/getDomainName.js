// So we gonna parse a 'URL string' into a 'URL Object'
// JS has built-in API which is useful for parsing URL string (eg. https://example.com/example-path)
// And breaking it down into JS Object which will have all the parsed sections which we will be
// able to extract things like domain, hostname, scheme, or whatever
// It handles all the parsing logic for us
// URL API is built into JavaScript. We can create a new URL object:
/*
    const urlObj = new URL("https://example.com/example-path");
    
    // to extract the hostname:
        const urlObj.name;

*/


// Assignment: Complete the getDomainNameFromURL function. Given a full URL, it should return the
//             domain (or host) name


function getDomainNameFromURL(url) {
    // converting URL string into Object 
    const urlObj = new URL(url);
    return urlObj.hostname;
}

const bootdevURL = "https://boot.dev/learn/learn-python";
const domainName = getDomainNameFromURL(bootdevURL);
console.log(`The domain name for ${bootdevURL} is ${domainName}`);