import { Inter } from "next/font/google";
import MatchingResult from "@/components/MatchingResult";
import LabeledTextfield from "../components/LabeledTextfield";
import Button from "@/components/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { startMatching, resetValues } from "@/store/features/elementsSlice";


// Store
const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  // States
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  // Store
  const dispatch = useDispatch()

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(resetValues());
    dispatch(startMatching({ firstName, lastName }));
  }

  return (
    <main className={`w-full max-w-screen-sm p-4 ${inter.className}`}>
      <MatchingResult />
      
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="w-full flex flex-row gap-6 px-2 mb-2">
        <LabeledTextfield
          autoFocus
          label="First Name"
          value={firstName}
          handleChange={(value) => setFirstName(value)}
        />
        <LabeledTextfield
          label="Last Name"
          value={lastName}
          handleChange={(value) => setLastName(value)}
        />
      </div>

      <Button type="submit" label="Breakify"/>
      </form>
    </main>
  );
}

export default Home;