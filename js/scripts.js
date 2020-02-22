$(function() {
	$('[data-toggle="tooltip"]').tooltip();
	// carousel Pause/Play
	$(".carousel").carousel({ interval: 2000 });
	$("#carouselButton").click(function() {
		if (
			$("#carouselButton")
				.children("i")
				.hasClass("fa-pause")
		) {
			$(".carousel").carousel("pause");
			$("#carouselButton")
				.children("i")
				.removeClass("fa-pause");
			$("#carouselButton")
				.children("i")
				.addClass("fa-play");
		} else {
			$(".carousel").carousel("cycle");
			$("#carouselButton")
				.children("i")
				.removeClass("fa-play");
			$("#carouselButton")
				.children("i")
				.addClass("fa-pause");
		}
	});

	// Reserve Modal
	$("#reserveModalBtn").click(function() {
		$(".reserveModal").modal("toggle");
	});
	// Login Modal
	$("#loginModalBtn").click(function() {
		$("#loginModal").modal("toggle");
	});
});
