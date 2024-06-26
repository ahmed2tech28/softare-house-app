import React from "react";
import TextField from "@mui/material/TextField";
import ButtonComp from "../../common/ButtonComp";

const Form: React.FC = () => {
  return (
    <form className="flex flex-col gap-y-10 f-mon">
      <div className="flex w-full gap-x-2">
        <div className="w-1/2 flex flex-col gap-y-10">
          <TextField
            sx={{
              fontSize: "1.2rem",
            }}
            id="full-name"
            label="Full Name"
            variant="standard"
            InputLabelProps={{
              style: {
                opacity: "0.1",
                fontSize: "18px",
                marginTop: "-0.5rem",
              },
            }}
            InputProps={{
              style: {
                "& .MuiInputUnderline:after": {
                  borderBottom: "1px solid rgba(0, 0, 0, 0.3)", // Change opacity of input underline
                },
              } as React.CSSProperties, // Type assertion
            }}
          />
          <TextField
            sx={{
              fontSize: "1.2rem",
            }}
            id="phone"
            label="Phone"
            variant="standard"
            InputLabelProps={{
              style: {
                opacity: "0.1",
                fontSize: "18px",
                marginTop: "-0.5rem",
              },
            }}
            InputProps={{
              style: {
                "& .MuiInput-underline:after": {
                  borderBottom: "1px solid rgba(0, 0, 0, 0.3)", // Change opacity of input underline
                },
              } as React.CSSProperties, // Type assertion
            }}
          />
        </div>
        <div className="w-1/2 flex flex-col gap-y-10">
          <TextField
            sx={{
              fontSize: "1.2rem",
            }}
            id="email"
            label="Email"
            variant="standard"
            InputLabelProps={{
              style: {
                opacity: "0.1",
                fontSize: "18px",
                marginTop: "-0.5rem",
              },
            }}
            InputProps={{
              style: {
                "& .MuiInput-underline:after": {
                  borderBottom: "1px solid rgba(0, 0, 0, 0.3)", // Change opacity of input underline
                },
              } as React.CSSProperties, // Type assertion
            }}
          />
          <TextField
            sx={{
              fontSize: "1.2rem",
            }}
            id="career"
            label="Career"
            variant="standard"
            InputLabelProps={{
              style: {
                opacity: "0.1",
                fontSize: "18px",
                marginTop: "-0.5rem",
              },
            }}
            InputProps={{
              style: {
                "& .MuiInput-underline:after": {
                  borderBottom: "1px solid rgba(0, 0, 0, 0.3)", // Change opacity of input underline
                },
              } as React.CSSProperties, // Type assertion
            }}
          />
        </div>
      </div>
      <TextField
        sx={{
          fontSize: "1.2rem",
        }}
        id="company"
        label="Company"
        variant="standard"
        InputLabelProps={{
          style: {
            opacity: "0.1",
            fontSize: "18px",
            marginTop: "-0.5rem",
          },
        }}
        InputProps={{
          style: {
            "& .MuiInput-underline:after": {
              borderBottom: "1px solid rgba(0, 0, 0, 0.3)", // Change opacity of input underline
            },
          } as React.CSSProperties, // Type assertion
        }}
      />
      <TextField
        sx={{
          fontSize: "1.2rem",
        }}
        id="message"
        label="Message"
        variant="standard"
        InputLabelProps={{
          style: {
            opacity: "0.1",
            fontSize: "18px",
            marginTop: "-0.5rem",
          },
        }}
        InputProps={{
          style: {
            "& .MuiInput-underline:after": {
              borderBottom: "1px solid rgba(0, 0, 0, 0.3)", // Change opacity of input underline
            },
          } as React.CSSProperties, // Type assertion
        }}
      />
      <div className="flex gap-x-2">
        <input type="checkbox" name="terms" id="terms" />
        <label htmlFor="terms">
          By sending this for I confirm that I have read and accept the privacy
          policy
        </label>
      </div>
      <div>
        <ButtonComp
          text="Send Message"
          variant="contained"
          edges="rounded"
          type="submit"
          padding="0.7rem 2rem"
        />
      </div>
    </form>
  );
};

const ClinetCard: React.FC = () => {
  return (
    <div className="flex w-full rounded-xl gap-x-2">
      <div className="w-1/3 rounded-full overflow-hidden">
        <img src="/client2.png" alt="clinet2" />
      </div>
      <div className="w-2/3 flex flex-col gap-y-3">
        <p className="f-mon">USASaudi Arabia</p>
        <p className="font-semibold f-mon">Waleed J Sanchez</p>
        <p className="f-mon">Disrupting Construction in the GCC</p>
      </div>
    </div>
  );
};

const ReviewBox: React.FC = () => {
  return (
    <div className="w-[26rem] h-[35rem] bg-white px-7 py-14 flex-col justify-between flex rounded-xl f-mon">
      <p className="leading-loose text-[18px] f-mon">
        Devhouse&apos;s team has been instrumental in the success of our
        platform, Muqawiloon.com. Their programmers&apos; technical expertise
        and their designers&apos; creative flair have combined to make our
        vision a reality, providing a powerful, user-friendly solution for the
        construction industry.
      </p>
      <ClinetCard />
    </div>
  );
};

const Contact: React.FC = () => {
  return (
    <div className="lg:h-[50rem] h-fit w-screen bg-[#F7F7F7] mt-8" id="contact">
      <div className="h-full container mx-auto py-10 flex">
        <div className="lg:w-1/2 w-[90vw] lg:mx-0 mx-auto flex flex-col gap-y-5">
          <h1 className="md:text-5xl text-3xl font-semibold md:leading-[4rem]">
            Start growing your <br /> business with us
          </h1>
          <Form />
        </div>
        <div className="w-1/2 lg:flex hidden justify-center">
          <ReviewBox />
        </div>
      </div>
    </div>
  );
};

export default Contact;
