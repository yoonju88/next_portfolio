import * as React from "react"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
    SelectSeparator,
} from "@/components/ui/select"

export default function SelectSrollable({ title, lists, onClick }) {
    return (
        <Select onValueChange={(value) => onClick(value)}> {/* !! 외부 라이브러리 이므로 여기에 원 클릭을 적용해야 함 */}
            <SelectTrigger className="w-[250px] h-[40px] capitalize text-center ">
                <SelectValue placeholder={title} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>{title} </SelectLabel>
                    <SelectSeparator />
                    {lists.map((item) => {
                        return (
                            <SelectItem
                                key={item.id}
                                value={item.value}
                                className="capitalize"
                            >
                                {item.label}
                            </SelectItem>
                        )
                    })}
                </SelectGroup>
            </SelectContent >
        </Select >
    )
}
