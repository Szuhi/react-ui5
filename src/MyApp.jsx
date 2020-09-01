import React, { useState } from "react";
import {
    Avatar,
    Card,
    Text,
    ShellBar,
    ShellBarItem,
    List,
    StandardListItem,
    ValueState,
    ProgressIndicator,
    Title,
    TitleLevel,
    FlexBox,
    FlexBoxJustifyContent,
    FlexBoxWrap,
    FlexBoxDirection,
    AnalyticalTable,
    Icon
} from "@ui5/webcomponents-react";
import { spacing } from "@ui5/webcomponents-react-base";
import { BarChart, LineChart } from "@ui5/webcomponents-react-charts";
import "@ui5/webcomponents-icons/dist/icons/line-chart.js";
import "@ui5/webcomponents-icons/dist/icons/horizontal-bar-chart.js";
import "@ui5/webcomponents-icons/dist/icons/add.js";
import "@ui5/webcomponents-icons/dist/icons/list.js";
import "@ui5/webcomponents-icons/dist/icons/table-view.js";

export function MyApp() {
    const [toggleCharts, setToggleCharts] = useState("lineChart");
    const [loading, setLoading] = useState(false);
    const contentTitle =
        toggleCharts === "lineChart" ? "Line Chart" : "Bar Chart";
    const switchToChart =
        toggleCharts === "lineChart" ? "Bar Chart" : "Line Chart";

    const handleHeaderClick = () => {
        if (toggleCharts === "lineChart") {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setToggleCharts("barChart");
            }, 2000);
        } else {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setToggleCharts("lineChart");
            }, 2000);
        }
    };

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
    }];

    const tableData = new Array(500).fill(null).map((_, index) => {
        return {
            name: `name${index}`,
            age: Math.floor(Math.random() * 100),
            friend: {
                name: `friend.Name${index}`,
                age: Math.floor(Math.random() * 100)
            }
        };
    });

    const tableColumns = [
        {
            Header: "Name",
            accessor: "name"
        },
        {
            Header: "Age",
            accessor: "age"
        },
        {
            Header: "Friend Name",
            accessor: "friend.name"
        },
        {
            Header: "Friend Age",
            accessor: "friend.age"
        }
    ];

    return (
        <div>
            <ShellBar
                logo={<img src="logo192.png" />}
                profile={<Avatar image="" />}
                primaryTitle="My App"
            >
                <ShellBarItem icon="add" text="Add" />
            </ShellBar>
            <Card 
                avatar={<Icon name={toggleCharts === "lineChart" ? "line-chart" : "horizontal-bar-chart"}/>}
                heading="Stock Price"
                style={{ width: "300px" }}
                headerInteractive
                onHeaderClick={handleHeaderClick}
                subheading={`Click here to switch to ${switchToChart}`}
            >
                <Text style={spacing.sapUiContentPadding}>{contentTitle}</Text>
                {toggleCharts === "lineChart" ? (
                    <LineChart
                        dimensions={[{ accessor: "month" }]}
                        measures={[{ accessor: "data", label: "Stock Price" }]}
                        dataset={dataset}
                        loading={loading}
                    />
                ) : (
                    <BarChart
                        dimensions={[{ accessor: "month" }]}
                        measures={[{ accessor: "data", label: "Stock Price" }]}
                        dataset={dataset}
                        loading={loading}
                    />
                )}
            </Card>
            <Card
                heading="Progress"
                subheading="List"
                style={{ width: "300px" }}
                avatar={<Icon name="list" />}
            >
                <List>
                    <StandardListItem info="Finished" infoState={ValueState.Success}>
                        Activity 1
                    </StandardListItem>
                    <StandardListItem info="Failed" infoState={ValueState.Error}>
                        Activity 2
                    </StandardListItem>
                    <StandardListItem 
                        info="In Progress" 
                        infoState={ValueState.Warning}
                        style={{ height: "80px" }}
                    >
                        <FlexBox direction={FlexBoxDirection.Column}>
                            <Title level={TitleLevel.H5}>Activity 3</Title><br />
                            <ProgressIndicator value={89} valueState={ValueState.Success} />
                        </FlexBox>
                    </StandardListItem>
                    <StandardListItem
                        info="In Progress"
                        infoState={ValueState.Warning}
                        style={{ height: "80px" }}
                    >
                        <FlexBox direction={FlexBoxDirection.Column}>
                            <Title level={TitleLevel.H5}>Activity 4</Title><br />
                            <ProgressIndicator value={5} valueState={ValueState.Error} />
                        </FlexBox>
                    </StandardListItem>
                </List>
            </Card>
            <Card
                heading="Analytical Table" 
                style={{ width: "900px" }}
                avatar={<Icon name="table-view" />}
            >
                <AnalyticalTable 
                    data={tableData}
                    columns={tableColumns}
                    visibleRows={5}/>
            </Card>
        </div>
  );
}