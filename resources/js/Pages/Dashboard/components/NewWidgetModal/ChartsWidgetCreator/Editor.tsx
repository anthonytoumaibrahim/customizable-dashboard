interface ChartWidgetEditorProps {
    name: string;
    component: any;
}

const ChartWidgetEditor = ({
    name,
    component: ChartComponent,
}: ChartWidgetEditorProps) => {
    return (
        <div>
            <h4 className="text-xl font-bold">{name}</h4>
            <ChartComponent />
        </div>
    );
};

export default ChartWidgetEditor;
