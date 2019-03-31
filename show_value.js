

function show_value_district(district_name,replace) {
if(replace) {
  d3.select("#chart").selectAll("*").remove();
  //  divOne.style.display='none';
    current_id_living = 0;
}
d3.csv('ams_stats_districts.csv').then(function(data) {
//d3.select("#chart").selectAll("*").remove();
var district_data = {};
var percentFormat = d3.format(',.2%');

  data.forEach(function(d){
    var dict = {
      'Population 2018': +d["population_2018"],
      'People with Welfare Allowance': +d["people_with_welfare_allowance_2018"],
      'People Labour Force': +d["potential_labour_force_total_2018"]
      }
      district_data[d["district"]] = dict
  })

  console.log(district_data);
  var one_district = district_data[district_name];
  console.log(one_district);

  if(one_district == undefined){
    show_value_neighbourhood(district_name);
    return;
  }

  one_district["Percentage_population_welfare"] = one_district['People with Welfare Allowance'] / one_district['Population 2018']
  // one_district.forEach(function(d){
  //   d["Percentage_population_welfare"] = d['People with Welfare Allowance'] / d['Population 2018']
  // })
  one_district["Percentage_population_labourforce"] = one_district["People Labour Force"] / one_district['Population 2018']
  // one_district.forEach(function(d){
  //   d["Percentage_population_labourforce"] = d["People Labour Force"] / d['Population 2018']
  // })
  var width = 600,
      height = 150,
      margin = {top: 10, right: 10, bottom: 10, left: 10};

  console.log(one_district);
  var svg = d3.select('#chart').append('svg')
                .attr('width', width - margin.left)
                .attr('height', height)
              .append('g')
                .attr('transform', 'translate(' + (width / 2) + ',' + height / 2 + ')');

    //  d3.select('#chart').text("Percentage Potential Labour : " + percentFormat(one_district["Percentage_population_labourforce"]) + "Percentage with Welfare: " + percentFormat(one_district["Percentage_population_welfare"]));
      console.log(one_district["Percentage_population_labourforce"]);
       var text_area =  svg.append("text")
                           .datum(one_district)
                           .attr("x", 20)
                           .attr("y", 20)
                           .style("text-anchor", "middle");// bind data to the div


       var percentage = text_area.append("tspan")
                            .attr("dx", 0)
                            .attr("dy", 0)
                            .attr('x', -100)
                              .text("Percentage")
                               .attr('font-weight', 'bold')
                               .style("font-size", "15px")
                               .datum(one_district);
     var potential = text_area.append("tspan")
                          .attr("dx", 0)
                          .attr("dy", "1.2em")
                          .attr('x', -100)
                            .text("Potential")
                             .attr('font-weight', 'bold')
                             .style("font-size", "15px")
                             .datum(one_district);
      var labour = text_area.append("tspan")
                           .attr("dx", 0)
                           .attr("dy", "1.2em")
                           .attr('x', -100)
                             .text("Labour:")
                              .attr('font-weight', 'bold')
                              .style("font-size", "15px")
                              .datum(one_district);

      var labour_value = text_area.append("tspan")
                           .attr("dx", 0)
                           .attr("dy", "1.2em")
                           .attr('x', -100)
                             .text(percentFormat(one_district["Percentage_population_labourforce"]))
                              .attr('font-weight', 'bold')
                              .style("font-size", "15px")
                            .datum(one_district);

      var text_area_2 =  svg.append("text")
                          .datum(one_district)
                          .attr("x", 20)
                          .attr("y", 20)
                          .style("text-anchor", "middle");// bind data to the div

  //  console.log(text_elements.text());
      var per = text_area_2.append("tspan")
                      .attr("dx", 0)
                      .attr("dy", 0)
                      .attr('x', 100)
                //    .attr("y",0)
                    .text("Percentage")
                    .attr('font-weight', 'bold')
                    .style("font-size", "15px");

      var with_text = text_area_2.append("tspan")
                    .attr("dx", 0)
                    .attr("dy", "1.2em")
                    .attr('x', 100)
                    .text('with')
                    .attr('font-weight', 'bold')
                    .style("font-size", "15px");

      var welfare = text_area_2.append("tspan")
                    .attr("dx", 0)
                    .attr("dy", "1.2em")
                    .attr('x', 100)
                    .text('Welfare : ')
                    .attr('font-weight', 'bold')
                    .style("font-size", "15px");

      var welfare_value = text_area_2.append("tspan")
                    .attr("dx", 0)
                    .attr("dy", "1.2em")
                    .attr('x', 100)
                    .text(percentFormat(one_district["Percentage_population_welfare"]))
                    .attr('font-weight', 'bold')
                    .style("font-size", "15px");


     text_area.exit()
         .attr("class", "exit")
         .transition().duration(1000)
         .remove();

    console.log(one_district);

   });
   current_id_living = current_id_living+1
   console.log(current_id_living)
   }

function show_value_neighbourhood(neighbourhood_name) {
   d3.csv('ams_stats_neighbourhoods.csv').then(function(data) {
  var percentFormat = d3.format(',.2%');
  var district_data = {};

  data.forEach(function(d){
    var dict = {
      'Population 2018': +d["population_2018"],
      'People with Welfare Allowance': +d["people_with_welfare_allowance"],
      'People Labour Force': +d["potential_labour_force_total_2018"]
      }
      district_data[d["neighbourhood"]] = dict
  })

     // change the disctrict here
     var one_district = district_data[neighbourhood_name];

       console.log(neighbourhood_name);
       console.log(one_district[neighbourhood_name]);
    // console.log(one_district['Holysloot']);

     one_district["Percentage_population_welfare"] = one_district['People with Welfare Allowance'] / one_district['Population 2018']

     // one_district.forEach(function(d){
     //   d["Percentage_population_welfare"] = d['People with Welfare Allowance'] / d['Population 2018']
     // })
     one_district["Percentage_population_labourforce"] = one_district["People Labour Force"] / one_district['Population 2018']

     // one_district.forEach(function(d){
     //   d["Percentage_population_welfare"] = d['People with Welfare Allowance'] / d['People Labour Force']
     // })
     //
     // one_district.forEach(function(d){
     //   d["Percentage_population_labourforce"] = d["potential_labour_force_total_2018"] / d["population_2018"]
     // })

     var width = 600,
         height = 150,
         margin = {top: 10, right: 10, bottom: 10, left: 10};

     console.log(one_district);
     var svg = d3.select('#chart').append('svg')
                   .attr('width', width - margin.left)
                   .attr('height', height)
                 .append('g')
                   .attr('transform', 'translate(' + (width / 2) + ',' + height / 2 + ')');

       //  d3.select('#chart').text("Percentage Potential Labour : " + percentFormat(one_district["Percentage_population_labourforce"]) + "Percentage with Welfare: " + percentFormat(one_district["Percentage_population_welfare"]));
         console.log(one_district["Percentage_population_labourforce"]);

          var text_area =  svg.append("text")
                              .datum(one_district)
                              .attr("x", 20)
                              .attr("y", 20)
                              .style("text-anchor", "middle");// bind data to the div


          var percentage = text_area.append("tspan")
                               .attr("dx", 0)
                               .attr("dy", 0)
                               .attr('x', -100)
                                 .text("Percentage")
                                  .attr('font-weight', 'bold')
                                  .style("font-size", "15px")
                                  .datum(one_district);
        var potential = text_area.append("tspan")
                             .attr("dx", 0)
                             .attr("dy", "1.2em")
                             .attr('x', -100)
                               .text("Potential")
                                .attr('font-weight', 'bold')
                                .style("font-size", "15px")
                                .datum(one_district);
         var labour = text_area.append("tspan")
                              .attr("dx", 0)
                              .attr("dy", "1.2em")
                              .attr('x', -100)
                                .text("Labour:")
                                 .attr('font-weight', 'bold')
                                 .style("font-size", "15px")
                                 .datum(one_district);

         var labour_value = text_area.append("tspan")
                              .attr("dx", 0)
                              .attr("dy", "1.2em")
                              .attr('x', -100)
                                .text(percentFormat(one_district["Percentage_population_labourforce"]))
                                 .attr('font-weight', 'bold')
                                 .style("font-size", "15px")
                               .datum(one_district);

         var text_area_2 =  svg.append("text")
                             .datum(one_district)
                             .attr("x", 20)
                             .attr("y", 20)
                             .style("text-anchor", "middle");// bind data to the div

     //  console.log(text_elements.text());
         var per = text_area_2.append("tspan")
                         .attr("dx", 0)
                         .attr("dy", 0)
                         .attr('x', 100)
                   //    .attr("y",0)
                       .text("Percentage")
                       .attr('font-weight', 'bold')
                       .style("font-size", "15px");

         var with_text = text_area_2.append("tspan")
                       .attr("dx", 0)
                       .attr("dy", "1.2em")
                       .attr('x', 100)
                       .text('with')
                       .attr('font-weight', 'bold')
                       .style("font-size", "15px");

         var welfare = text_area_2.append("tspan")
                       .attr("dx", 0)
                       .attr("dy", "1.2em")
                       .attr('x', 100)
                       .text('Welfare : ')
                       .attr('font-weight', 'bold')
                       .style("font-size", "15px");

         var welfare_value = text_area_2.append("tspan")
                       .attr("dx", 0)
                       .attr("dy", "1.2em")
                       .attr('x', 100)
                       .text(percentFormat(one_district["Percentage_population_welfare"]))
                       .attr('font-weight', 'bold')
                       .style("font-size", "15px");

    text_area.exit()
        .attr("class", "exit")
        .transition().duration(1000)
        .remove();

      });
}
