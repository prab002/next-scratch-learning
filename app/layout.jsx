import "@/assets/styles/global.css";

export const metadata = {
  title: "new learning",
  description: "find your rendtal data ",
  keywords: "new property , find data",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
