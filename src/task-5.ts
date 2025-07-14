console.log('\x1b[32mЗадача 5. Union Type\x1b[0m');



type Status = "loading" | "success" | "error";

function logStatus(status: Status): void {
  if (status === "loading") {
    console.log("Loading...");
  } else if (status === "success") {
    console.log("Success!");
  } else if (status === "error") {
    console.log("Something went wrong");
  }
}

logStatus("loading");  