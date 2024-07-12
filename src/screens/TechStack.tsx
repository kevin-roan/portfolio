const TechStack = () => {
  return (
    <div>
      <h2>My Tech Stack</h2>
      <div className="border-2">
        <Stack />
        <Stack />
        <Stack />
        <Stack />
      </div>
      <div className="border-2">
        <h2>Social</h2>
        <div>
          <h4>Blogs: https://blogs.kevinroan.in</h4>
          <h4>LinkedIn: https://linkedin/in/kevinroan</h4>
          <h4>Twitter: https://x.com/kevinroan_</h4>
          <h4>Instagram: https://instagram.com/kevinroan_</h4>
        </div>
        <div>
          <h2>Signature</h2>
          <p>~ Designed and Developed by Kevin Roan</p>
        </div>
      </div>
    </div>
  );
};

const Stack = () => {
  return (
    <div>
      <h4>Front End</h4>
      <p>ReactJs/NextJs</p>
      <p>Tailwindcss,ShadCn,Material Ui,Material Tailwind,Scss,ChakraUi</p>
    </div>
  );
};
export default TechStack;
