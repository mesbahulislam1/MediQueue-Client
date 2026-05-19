"use client";

import { AlertDialog, Button } from "@heroui/react";
import { toast } from "react-toastify";

export function BookingDelete({ booking }) {
    
  const deleteHandel = async () => {
    const res = await fetch(`http://localhost:8000/booking/${booking?._id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json()
    toast.success('Delete Succesfull')
    if (data) {
        window.location.reload()
    }
  };

  return (
    <AlertDialog>
      <Button variant="danger">Cancel </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete booking permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete the booking for{" "}
                <strong>{booking?.studentName}</strong>. All related booking
                data will be removed. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={deleteHandel} slot="close" variant="danger">
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
