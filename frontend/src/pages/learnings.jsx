import React from "react";

function Lerning(){
    const codeSnippet = [`// Close modal on ESC key
useEffect(() => {
  const handleEsc = (e) => {
    if (e.key === "Escape") {
      navigate(-1);
    }
  };
  window.addEventListener("keydown", handleEsc);
  return () => window.removeEventListener("keydown", handleEsc);
}, [navigate]);`,`
{/* 
  The outer div creates the **overlay (modal background)**.
  - fixed        → sticks to the screen (doesn’t move on scroll).
  - inset-0      → sets top, right, bottom, left = 0 → fills the whole screen.
  - bg-black     → background color = black.
  - bg-opacity-40 → makes the black background 40% transparent (so user sees blurred page behind).
  - backdrop-blur-sm → applies a small blur effect to the background (gives a frosted glass effect).
  - flex         → enables flexbox for centering.
  - items-center → vertically centers modal content.
  - justify-center → horizontally centers modal content.
*/}
<div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center">

  {/*
    The inner div is the **actual modal box**.
    - relative   → keeps it in flow but allows child absolute elements if needed.
    - bg-white   → modal background = white.
    - p-6        → padding inside the box (spacing around content).
    - rounded-xl → rounded corners with extra large radius.
    - shadow-lg  → large shadow to give "popup" floating effect.
  */}
  <div className="relative bg-white p-6 rounded-xl shadow-lg">

    {/*
      Modal content starts here.
      h2          → Heading of modal.
      In real use, you would also place input fields, buttons, etc.
    */}
    <h2>User Registration</h2>

    {/* Registration form will go here in future */}
  </div>
</div>
`,`backend server.js
use res.json() to send JSON response:
if you use res.send() with an object, Express will convert it to JSON automatically, but using res.json() is more explicit and clear for sending JSON data.`];
    return (
        <>
        <h2>welcome to lernings</h2>
        {codeSnippet.map((items)=>(

            <div className="m-4 bg-slate-900 text-green-400 p-4 rounded-xl shadow-lg">
      <pre className="whitespace-pre-wrap text-sm">
        <code>{items}</code>
      </pre>
    </div>
        ))}

        </>
    )
}

export default Lerning