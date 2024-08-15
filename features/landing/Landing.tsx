import Link from "next/link";
import Button from "@/layouts/components/Button";

const Landing = () => {
  return (
    <div className="flex flex-col w-full justify-center align-middle items-center">
      <div className="flex flex-col items-center py-4">
        Thank you for your visit! - Upload that handwritten
        <p>Did you find everything you were looking for?</p>
        <p>
          INSERT LITTLE SURVEY HERE AND SEND ANSWERRS TO BACKEND OR OUTSOURCE
          THE SURVEY
        </p>
      </div>
      <div>
        <Link href="/fridge">
          <Button>
            <h1>SIGN BACK IN</h1>
          </Button>
        </Link>
      </div>
      <div>
        <Link href="/">
          <Button>
            <h1>BACK TO MAIN PAGE</h1>
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default Landing;
