import React from "react";
import { Card, Text } from "@ui5/webcomponents-react";
import { spacing } from "@ui5/webcomponents-react-base";
import { BarChart, LineChart } from "@ui5/webcomponents-react-charts";

export function MyApp() {
    const handleHeaderClick = () => {
        alert ("Header clicked");
    }

    const dataset = [
        {
            month: "January",
            data: 65
        },
        {
            month: "February",
            data: 59
        },
        {
            month: "March",
            data: 80
        },
        {
            month: "April",
            data: 81
        },
        {
            month: "May",
            data: 56
        },
        {
            month: "June",
            data: 55
        },
        {
            month: "July",
            data: 40
        }
    ]

    return (
        <div>
            <Card 
                heading="Card" 
                style={{ width: "300px" }} 
                headerInteractive
                onHeaderClick={handleHeaderClick}>
                <Text style={spacing.sapUiContentPadding}>
                    This is the content area of the Card
                </Text>
                <LineChart 
                    measures={[{ accessor: "month" }]} 
                    dimensions={[{ accessor: "data", label: "Stock Price" }]}
                    dataset={dataset} 
                />
                <BarChart
                    measures={[{ accessor: "month" }]} 
                    dimensions={[{ accessor: "data", label: "Stock Price" }]}
                    dataset={dataset} 
                />
            </Card>
        </div>
    )
}