"use client";

import { AlertDialog, Button } from "@heroui/react";

export function TutorsDelete({tutor}) {

    const deleteHandel =async()=>{
        const res =await fetch(`http://localhost:8000/tutors/${tutor._id}`, {
            method: 'DELETE',
            headers: {
                'content-type':'application/json',
            }
        })
        const data = await res.json()
        if (data) {
            window.location.reload()
        }
    }
  return (
    <AlertDialog>
      <Button className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600">
        Delete
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete Tutors permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{tutor.tutorName}</strong>{" "}
                and all of its data. This action cannot be undone.
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
