// Get elements by class name
pageHeader=document.getElementsByClassName("page-header cf")[0];
ul=document.getElementsByClassName("contact-list")[0];
pagination=document.getElementsByClassName("pagination")[0];

showTotalContacts(users.length);
var size = users.length/10;
showContacts(0);
// Add 1 to create 1 extra page for remainder of size
addPagination(size+1);

function showContacts(n){
    ul.innerHTML="";
    const usersData = users.map(user => ({
        // For each user object in the array, it creates a new object using the spread syntax (...user), which copies all properties from the original user object into the new one.
        ...user,
        // Replace all the space with dot to create user email
        email: `${user.name.replaceAll(' ', '.')}@example.com`
    })
        );
        // Loop through all the contacts and modify user avatar, name, email and join date with those in data.js
        for(i=n;i<n+10;i++){
            ul.innerHTML+=`<li class=\"contact-item cf\"><div class=\"contact-details\"><img class=\"avatar\" src=\"${usersData[i].image}"><h3>${usersData[i].name}</h3><span class=\"email\">${usersData[i].email}</span></div> <div class=\"joined-details\"><span class=\"date\">Joined ${usersData[i].joined}</span></div></li>`
        }
}

function addPagination(n){
    pagination.innerHTML="";
    // Modify pagination based on the number of contacts
    for(i=1;i<=n;i++){
        pagination.innerHTML+=`<li><a href="javascript:showContacts(${i-1}*10);">${i}</a></li>`;
    }
}

// Show total number of contacts
function showTotalContacts(n){
    pageHeader.innerHTML=`<h2>Contacts</h2> <h3>Total: ${n}</h3>`;
}