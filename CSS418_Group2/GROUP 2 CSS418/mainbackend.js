// Simulated database for user credentials
const userDatabase = [
    
// User 1 - Beloved Adejuyigbe
  {
    email: "belovedadejuyigbe@gmail.com",
    password: "Password123",
    studentID: "M246800",
    securityQuestion: "q1",
    securityAnswer: "pizza"
  },
    
// User 2 - Gloria Omojo Ode
  {
    email: "inkrediblerya@gmail.com",
    password: "SecurePass456!",
    studentID: "M789012",
    securityQuestion: "q2",
    securityAnswer: "blue"
  },
    

// User 3 - Chinedu Somtochukwu 
    {
    email: "chinedu_somto@yahoo.com",
    password: "password123",
    studentID: "M123456",
    securityQuestion: "q1",
    securityAnswer: "pizza"
  },
    
    
// User 4 - Sadiq Divinefavour Oyiza
    
  {
    email: "oyizasadiq@gmail.com",
    password: "p@ssword",
    studentID: "M123321",
    securityQuestion: "q2",
    securityAnswer: "blue"
  },
    
    
// User 5 - Pascal Chigozie Ejiofor
    
   {
    email: "pascalsmith251@gmail.com",
    password: "Ilovemyself1!",
    studentID: "M223344",
    securityQuestion: "q1",
    securityAnswer: "pizza"
  },
   
 
];


// Function to handle login
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const studentID = document.getElementById("student_id").value;
  const securityQuestion = document.getElementById("questions").value;
  const securityAnswer = document.getElementById("answer").value;

  // Find user in the database
  const user = userDatabase.find(user => 
    user.email === email &&
    user.password === password &&
    user.studentID === studentID &&
    user.securityQuestion === securityQuestion &&
    user.securityAnswer === securityAnswer
  );
    

  // If user exists, redirect to dashboard
  if (user) {
    window.location.href = "payment.html";
  } else {
    // // Display error message for invalid login details
    // const errorMessage = document.getElementById("empty");
    // errorMessage.textContent = "Invalid login details. Please try again.";

    alert('Invalid login details. Please try again')
  }
    

  // Clear form fields after submission
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("student_id").value = "";
  document.getElementById("questions").selectedIndex = 0;
  document.getElementById("answer").value = "";

  // Prevent default form submission
  return false;
}
