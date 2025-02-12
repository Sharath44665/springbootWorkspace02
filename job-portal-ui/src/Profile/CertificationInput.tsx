import { Button, TextInput } from "@mantine/core";
import fields from "../Data/Profile";
import SelectInput from "./SelectInput";
import { MonthPickerInput } from "@mantine/dates";
import { useState } from "react";

const CertificationInput = (props: any) => {
    const select = fields;
    const [issueDate, setIssueDate] = useState<Date | null>(new Date());
    return (<>
        <div className="flex flex-col gap-3">
            <div className="capitalize text-lg font-semibold">add certificate</div>
            <div className="flex gap-10 [&>*]:w-1/2 ">
                <TextInput
                    label="Title"
                    withAsterisk
                    placeholder="Enter Title"
                />
                <SelectInput {...select[1]} />

            </div>
            <div className="flex gap-10 [&>*]:w-1/2 ">
                <MonthPickerInput
                    label="Issue date"
                    withAsterisk
                    placeholder="Pick date"
                    maxDate={new Date()}
                    value={issueDate}
                    onChange={setIssueDate}
                />
                <TextInput
                    label="Certificate ID"
                    withAsterisk
                    placeholder="Enter ID"
                />
            </div>
            <div className="flex gap-5">
                <Button onClick={() => props.setEdit(false)} variant="outline" >Save</Button>
                <Button onClick={() => props.setEdit(false)} color="red" variant="light" >Cancel</Button>
            </div>
        </div>
    </>)
}

export default CertificationInput;