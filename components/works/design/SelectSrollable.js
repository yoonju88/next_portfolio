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

export default function SelectSrollable({ lists, onClick }) {
    return (
        <Select onValueChange={(value) => onClick(value)}> {/* !! 외부 라이브러리 이므로 여기에 원 클릭을 적용해야 함 */}
            <SelectTrigger className="w-[180px] capitalize">
                <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Select a category </SelectLabel>
                    <SelectSeparator />
                    {lists.map((item) => {
                        return (
                            <SelectItem
                                key={item.id}
                                value={item.type}
                                className="capitalize"
                            >
                                {item.type}
                            </SelectItem>
                        )
                    })}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
