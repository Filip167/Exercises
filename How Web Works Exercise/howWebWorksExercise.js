//1. What is HTTP?
- stands for Hypertext Transfer Protocol. HTTP is like the language of the internet, 
helping computers talk to each other. 
When you open a webpage, your web browser asks a server for the page using HTTP. 
The server then sends back the webpage, and this back-and-forth is how information 
travels on the web. It's like a conversation where your browser asks 
and the server answers, allowing the internet to share text, images, videos, and more


//2. What is URL?

- A URL, or Uniform Resource Locator, is the address of a specific webpage on the internet,
 like the location of a house on the web.

 //3. What is DNS?

 - Standos for Domain Name System. is like a phonebook for the internet, 
 translating human-readable web addresses 
 into computer-readable IP addresses.

 //4. What is a query string? 
 - A query string is a set of information added to the end of a URL
  that helps communicate data to a website, often used in search or 
  to pass parameters to a web application.

  //5. List two HTTP Verbs and their use cases.

  - GET: requests without side effects
  - POST: request with side effects. 

 //6. What is an HTTP request?
 - An HTTP request is a message sent by a web browser to a server,
  asking for a specific resource or action on the World Wide Web

  //7. - What is an HTTP response? 
  - An HTTP response is the message sent by a server to a client in 
  response to an HTTP request, containing the requested information or 
  indicating the outcome of the requested action.

  //8. What is an HTTP response?
  - An HTTP response is the message a server sends back to a client 
  after receiving an HTTP request, providing the requested data or 
  indicating the outcome of the request.


  //9. What is an HTTP header? Give a couple examples of request and response headers you have seen.
  
  
  - HTTP headers are additional pieces of information sent in both HTTP requests 
  and responses to provide metadata about the communication, such as

Request Headers:
User-Agent, Accept-Language, Cookie, Cache-Control

Response Headers:
Content, Set-Cookie:

//10. What happens when you type a URL in a browser?


- Typing the URL: When you type a website's address, the browser understands what you want.

- Finding the Address: The browser figures out the actual location of that website on the internet using a system called DNS, like finding a house's location.

- Asking for the Webpage: The browser sends a request to the website, asking for the webpage or whatever you wanted, like ordering a book online.

- Website Responds: The website gets the request, gathers the requested information, and sends it back to your browser, like the online store preparing and shipping your book.

- Getting the Response: Your browser receives the response, which is the webpage or data you wanted.

- Showing the Webpage: Finally, your browser takes that data and shows you the webpage with text, images, and everything else, like opening and reading the delivered book.


Part 2:

2.1 // Using curl, make a GET request to the icanhazdadjoke.com API to find all jokes involving the word “pirate”
C:\Users\Admin>curl -X GET "https://icanhazdadjoke.com/search?term=pirate" -H "Accept: application/json"
{"current_page":1,"limit":20,"next_page":1,"previous_page":1,"results":[
{"id":"SvzIBAQS0Dd","joke":"What did the pirate say on his 80th birthday? Aye Matey!"},
{"id":"QuscibaMClb","joke":"What does a pirate pay for his corn? A buccaneer!"},
{"id":"2gii3LeN7Ed","joke":"Why couldn't the kid see the pirate movie? Because it was rated arrr!"},
{"id":"SnOf2gqjiqc","joke":"Why are pirates called pirates? Because they arrr!"},
{"id":"exXSCtkOKe","joke":"Why do pirates not know the alphabet? They always get stuck at \"C\"."}],"search_term":"pirate","status":200,"total_jokes":5,"total_pages":1}


2.2// Use dig to find what the IP address is for icanhazdadjoke.com ( the 'dig' command, which is commonly used on Unix-like systems, was not recognized on my Windows CMD
// so instead i used nslookup icanhazdadjoke.com )

C:\Users\Admin>nslookup icanhazdadjoke.com
Server:  2603-9000-da08-50e8-0000-0000-0000-0001.inf6.spectrum.com
Address:  2603:9000:da08:50e8::1

Non-authoritative answer:
Name:    icanhazdadjoke.com
Addresses:  2606:4700:3032::ac43:c6ad
          2606:4700:3033::6815:420f
          104.21.66.15
          172.67.198.173


2.3 // Make a simple web page and serve it using python3 -m http.server. 
//Visit the page in a browser. <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Simple Web Page</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is a simple web page served with Python.</p>
</body>
</html>