// 1.
setTimeout(() => {
  console.log("I am printed after 3.5s");
}, 3500);

// 2.
// const value = prompt("Please Input a number");
// if (value != null) {
//   const result = Number.parseInt(value) + 200;
//   alert("Your result is " + result);
// }
// console.log(value);

// 3.
const webLocation = () => {
  console.log("inside location");
  const data = confirm("Do you want to see your website location");
  if (data) {
    console.log(document.location.href);
  }
};
// webLocation();

// 4.
// What is cookies??
/*
Coockies are the collection of the information. It is strored in local machine. In cookies  some data is stored that provieded by the users and some provided by the website. When client send a resquest to the server, If server is active, it send a response to the client and send some extra data to identify the client in every resuest.
 
Cookies are usually small text files, given ID tags that are stored on your computer's browser directory or program data subfolders.

Cookies are created when you use your browser to visit a website that uses cookies to keep track of your movements within the site, help you resume where you left off, remember your registered login, theme selection, preferences, and other customization functions.

There are two types of cookies: session cookies and persistent cookies. Session cookies are created temporarily in your browser's subfolder while you are visiting a website. Once you leave the site, the session cookie is deleted.

On the other hand, persistent cookie files remain in your browser's subfolder and are activated again once you visit the website that created that particular cookie. A persistent cookie remains in the browser's subfolder for the duration period set within the cookie's file.
*/

// 5.

/* 
 3 difference of localStorage vs sessionStogare 
 Local Storage : 1. Accessible from -any window 
 Session Storage: 1. Accessible from -same widow

 Local Storage : 2. Expires  -Never
 Session Storage: 2. Expires -On tab close

 Local Storage : 3. Capatily -5MB/10MB
 Session Storage: 3. Capacity -4KB


 Local Storage vs Session Storage vs Cookies
1. Local Storage
  a. The storage capacity of local storage is 5MB/10MB
  b. As it is not session-based, it must be deleted via javascript or manually	
  c. The client  can only read local storage
  d. There is no transfer of data to the server
  e. There are fewer old browsers that support it

2. Session Storage
  a. The storage capacity of session storage is 5MB	
  b. It’s session-based and works per window or tab. This means that data is stored only for the duration of a session, i.e., until the browser (or tab) is closed
  c. The client can only read local storage
  d. There is no transfer of data to the server
  e. There are fewer old browsers that support it

3. Cookies 
  a. The storage capacity of Cookies is 4KB
  b. Cookies expire based on the setting and working per tab and window
  c. Both clients and servers can read and write the cookies
  d. Data transfer to the server is exist
  e. It is supported by all the browser including older browser

*/
