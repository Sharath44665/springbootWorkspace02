import { Button, Checkbox, Textarea } from "@mantine/core";
import fields from "../Data/Profile";
import SelectInput from "./SelectInput";
import { useState } from "react";
import { MonthPickerInput } from "@mantine/dates";

const ExpInput = (props: any) => {
    const select = fields;
    const [desc, setDesc] = useState("As a Software Engineer at Google, I am responsible for designing, developing, and maintaining scalable software solutions that enhance user experience and improve operational efficiency. My role involves collaborating with cross-functional teams to define project requirements, develop technical specifications, and implement robust applications using cutting-edge technologies. I actively participate in code reviews, ensuring adherence to best practices and coding standards, and contribute to the continuous improvement of the development process.")
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [endDate, setEndDate] = useState<Date | null>(new Date());
    const [checked, setChecked] = useState(false);
    

    return (<>
        <div className="flex flex-col mb-3 gap-3">
            <div className="text-lg font-semibold ">{props.add?'Add':'Edit'} Experience</div>
            <div className="flex gap-10 [&>*]:w-1/2 ">
                <SelectInput {...select[0]} />
                <SelectInput {...select[1]} />

            </div>
            <SelectInput {...select[2]} />
            <Textarea
                label="Job Summary "
                value={desc}
                autosize
                minRows={3}
                withAsterisk
                placeholder="Enter Summary..."
                onChange={(event) => setDesc(event.currentTarget.value)}
            />
            <div className="flex gap-10 [&>*]:w-1/2 ">
                <MonthPickerInput
                    label="Start  date"
                    withAsterisk
                    placeholder="Pick date"
                    maxDate={endDate || undefined}
                    value={startDate}
                    onChange={setStartDate}
                />
                <MonthPickerInput
                    label="End  date"
                    withAsterisk
                    placeholder="Pick date"
                    disabled={checked}
                    minDate={startDate || undefined}
                    maxDate={new Date()}
                    value={endDate}
                    onChange={setEndDate}
                />
            </div>
            <Checkbox
                autoContrast
                label="Currently Working here"
                checked={checked}
                onChange={(event) => setChecked(event.currentTarget.checked)} />
            <div className="flex gap-5">
                <Button onClick={() => props.setEdit(false)} variant="outline" >Save</Button>
                <Button onClick={() => props.setEdit(false)} color="red" variant="light" >Cancel</Button>
            </div>
        </div>
    </>)
}

export default ExpInput;