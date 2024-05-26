import { Inter } from "next/font/google";
import CloseIcon from "@mui/icons-material/Close";
import { Rating } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import { ThumbDownAlt, ThumbUpAlt } from "@mui/icons-material";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isForm, setIsForm] = useState(false);

  const [value1, setValue1] = useState(0); // for safety rating

  const [value2, setValue2] = useState(0); // for communication rating

  const [isThumbDown, setIsThumbDown] = useState(false);
  const [isThumbUp, setIsThumbUp] = useState(false);

  const traits = [
    "Adventurous",
    "clean",
    "good listener",
    "Honest",
    "Humorous",
    "Kind",
    "Knowledgable",
    "Thoughtful",
    "trustWorthy",
    "Talkitive",
  ];

  const [buttonStates, setButtonStates] = useState(Array(10).fill(false));

  const toggleReviewForm = () => {
    setIsForm(!isForm);
  };

  const toggleDown = () => {
    setIsThumbDown(!isThumbDown);
    setIsThumbUp(false);
  };

  const toggleUp = () => {
    setIsThumbUp(!isThumbUp);
    setIsThumbDown(false);
  };

  if (!isForm) {
    return (
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 mt-[10%] ${inter.className}`}
      >
        <Button
          className="m-4 p-2"
          variant="contained"
          onClick={toggleReviewForm}
        >
          Leave a Review
        </Button>
        ;
      </main>
    );
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="h-[30rem] bg-white w-4/12 rounded-3xl ">
        <div className="ml-2 mt-2">
          <div className="">
            <CloseIcon
              className="hover:opacity-80 cursor-pointer"
              color="disabled"
              fontSize="large"
              onClick={toggleReviewForm}
            ></CloseIcon>
          </div>
          <h1 className="text-black m-2 font-bold text-2xl">Leave a review</h1>
        </div>

        <form className="mt-4 ml-4 h-[22rem] overflow-auto">
          <div className="border-b-2">
            <h3 className="text-black font-bold">Safty</h3>
            <p className="text-gray-400 text-sm">
              How safe did you feel with Trausti?
            </p>
            <Rating
              name="simple-controlled"
              className="mt-2 mb-4"
              value={value1}
              size="large"
              onChange={(event, newValue) => {
                setValue1(newValue);
              }}
            ></Rating>
          </div>

          <div className="border-b-2 py-2">
            <h3 className="text-black font-bold">Communication</h3>
            <p className="text-gray-400 text-sm">
              How easy was to communicate with Trausti?
            </p>

            <Rating
              name="simple-controlled"
              className="my-2"
              value={value2}
              size="large"
              onChange={(event, newValue) => {
                setValue2(newValue);
              }}
            ></Rating>
          </div>

          <div className="my-2 border-b-2">
            <h3 className="text-black font-bold">
              Would you like to recommend Trausti?
            </h3>
            <p className="text-gray-400 text-sm">
              Your opinion won't be posted publicaly.
            </p>
            <div className="mt-2 mb-4">
              <ThumbDownAlt
                fontSize="large"
                style={{ color: isThumbDown ? "green" : "gray" }}
                className="mr-20 cursor-pointer"
                onClick={toggleDown}
              />
              <ThumbUpAlt
                fontSize="large"
                style={{ color: isThumbUp ? "green" : "gray" }}
                className="cursor-pointer"
                onClick={toggleUp}
              />
            </div>
          </div>

          <div className="">
            <h3 className="text-black font-bold">Praise</h3>
            <p className="text-gray-400 text-sm mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.?
            </p>
            <div className="flex flex-wrap">
              {buttonStates.map((isClicked, index) => (
                <div
                  key={index}
                  className={`px-2 py-1 border rounded-xl m-2 ${
                    isClicked
                      ? "bg-green-500 border-green-500"
                      : "border-gray-500 text-black"
                  } cursor-pointer`}
                  onClick={() => {
                    const newButtonStates = [...buttonStates];
                    newButtonStates[index] = !newButtonStates[index];
                    setButtonStates(newButtonStates);
                  }}
                >
                  {traits[index]}
                </div>
              ))}
            </div>
          </div>

          <div  className="flex ml-28 mt-5">
            <button className="m-4 p-4 border rounded-xl text-white bg-green-400 hover:bg-green-600">
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
