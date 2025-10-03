import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { IoAdd } from "react-icons/io5";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ConsultationPage = () => {
  return (
    <div className="flex justify-center items-center min-h-[80vh] py-12">
      <div className="card bg-transparent shadow-lg border-2 border-dashed p-8 rounded-lg w-full h-full max-w-6xl ">
        <h1 className="text-2xl font-bold mb-2">Consultation Page</h1>
        <p className="text-gray-500 mb-2">
          Here you can book a consultation or see your past consultations.
        </p>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Date</TableHead>
              <TableHead className="text-center">Description</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">25 January 2025</TableCell>
              <TableCell className="text-center">Back Pain</TableCell>
              <TableCell className="text-right">View Report</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Image
          src="/assets/consult.svg"
          alt="Consultation"
          width={300}
          height={300}
          className="mx-auto mt-8"
        />
        <div className="text-center">
          <Dialog>
            <form>
              <DialogTrigger asChild>
                <Button className="mt-4">
                  <IoAdd /> Book Now
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Book Consultation</DialogTitle>
                  <DialogDescription>
                    Give us some information about your symptoms.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                  <div className="grid gap-3">
                    <Label htmlFor="name-1">Symptoms</Label>
                    <Textarea
                      placeholder="Type your symptoms here...."
                      className="resize-none"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button type="submit">Next</Button>
                </DialogFooter>
              </DialogContent>
            </form>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default ConsultationPage;
