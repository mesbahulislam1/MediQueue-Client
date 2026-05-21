import { TutorsDelete } from "@/components/TutorsDelete";
import { UpdateTutorsModal } from "@/components/UpdateTutorsModal";
import { Table } from "@heroui/react";
import React from "react";

const MyTutorPage = async () => {
   
  const res =await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/tutors`)
  const tutors = await res.json();

  return (
    <div className="container mx-auto my-9">
      <h1 className="text-2xl font-extrabold mb-8 text-black/80">
        My Tutors List
      </h1>

      {/* EMPTY STATE */}
      {tutors?.length === 0 ? (
        <div className="text-center py-20 text-gray-500 border rounded-xl bg-gray-50">
          <h2 className="text-xl font-semibold mb-2">
            No tutors found
          </h2>
          <p>
            You haven’t added any tutors yet. Start by creating one.
          </p>
        </div>
      ) : (
        <Table>
          <Table.ScrollContainer>
            <Table.Content
              aria-label="My Tutors Table"
              className="min-w-[700px]"
            >
              <Table.Header>
                <Table.Column isRowHeader>Name</Table.Column>
                <Table.Column>Subject</Table.Column>
                <Table.Column>Fee</Table.Column>
                <Table.Column>Location</Table.Column>
                <Table.Column>Actions</Table.Column>
              </Table.Header>

              <Table.Body>
                {tutors.map((tutor) => (
                  <Table.Row key={tutor._id}>
                    <Table.Cell>{tutor.tutorName}</Table.Cell>
                    <Table.Cell>{tutor.subject}</Table.Cell>
                    <Table.Cell>${tutor.hourlyFee}</Table.Cell>
                    <Table.Cell>{tutor.location}</Table.Cell>

                    {/* ACTIONS */}
                    <Table.Cell>
                      <div className="flex gap-2">
                        <UpdateTutorsModal tutor={tutor}></UpdateTutorsModal>
                        <TutorsDelete tutor={tutor}></TutorsDelete>
                      </div>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Content>
          </Table.ScrollContainer>
        </Table>
      )}
    </div>
  );
};

export default MyTutorPage;