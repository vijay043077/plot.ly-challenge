function samplePlot() {

    d3.json("samples.json").then(function(response) {
        
        console.log(response);

        const samples = response.samples;

        const ids = samples.filter(data => data.id == samplePlot);

        const display = ids[0]

        const sample_values = display.sample_values;
        console.log(sample_values);

        const otu_ids = display.otu_ids;
        console.log(otu_ids);

        const otu_labels = display.otu_labels;
        console.log(otu_labels);

        const topTen_values = sample_values.slice(0, 10);
        console.log(topTen_values);

        const topTen_ids = otu_ids.slice(1, 10);
        console.log(topTen_ids);

        const topTen_labels = otu_labels.slice(1, 10);
        console.log(topTen_labels);

        const trace1 = {
            x: topTen_values,
            y: topTen_ids,
            text: topTen_labels,
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

//samplePlot();