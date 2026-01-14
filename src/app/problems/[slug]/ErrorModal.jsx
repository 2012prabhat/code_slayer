import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function ErrorModal({ message }) {
  return (
    <div className="dark">
          <Dialog>
      <DialogTrigger className="text-black underline text-nowrap cursor-pointer bg-gray-200 py-0.5 px-2 rounded font-semibold">
        View Error
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Error Message</DialogTitle>
          <DialogDescription>{message}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
    </div>

  );
}

export default ErrorModal;
