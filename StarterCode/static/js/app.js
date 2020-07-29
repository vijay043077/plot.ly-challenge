function samplePlot(id) {

    d3.json("samples.json").then(function (response) {

        console.log(response);

        const samples = response.samples;

        const display = samples.filter(samples => samples.id == id)[0];
        console.log(display)

        const sample_values = display.sample_values;
        console.log(sample_values);

        const otu_ids = display.otu_ids;
        console.log(otu_ids);

        const otu_labels = display.otu_labels;
        console.log(otu_labels);

        const topTen_values = sample_values.slice(0, 10);
        console.log(topTen_values);

        const topTen_ids = otu_ids.slice(0, 10);
        console.log(topTen_ids);

        const topTen_labels = otu_labels.slice(0, 10);
        console.log(topTen_labels);

        const displayLabels = otu_ids.map(id => "OTU" + " " + id)
        console.log(`OTU ID: ${otu_ids}`);
        console.log(`OTU_labels: ${otu_labels}`);

        const trace1 = {
            x: topTen_values.reverse(),
            y: displayLabels.reverse(),
            text: topTen_labels.reverse(),
            type: "bar",
            orientation: "h"
        };

        const data = [trace1];

        const layout = {
            title: "Top 10 OTUs",
            margin: {
                l: 100,
                r: 100,
                t: 100,
                b: 100
            }
        };

        Plotly.newPlot("bar", data, layout);

    });
}

let dropDown = d3.select("#selDataset")
d3.json("samples.json").then(function (response) {
    let names = response.names;

    names.forEach((name) => {
        dropDown.append("option").text(name).property("value", name);

    });
});
samplePlot(940);

function optionChanged(value) {
    samplePlot(value)
}