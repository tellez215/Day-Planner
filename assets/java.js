// Displays the current day using momentJS

var todayDate = moment().format('dddd, MMMM Do YYYY');
$('#currentDay').html(todayDate);