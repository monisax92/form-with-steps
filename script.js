const formPages = document.querySelectorAll('.page');
const steps = document.querySelectorAll('.step');
const progressBar = document.querySelector('.progress-bar');
const prevBtn = document.querySelector('.btn-prev');
const nextBtn = document.querySelector('.btn-next');

let currentStep = 1;

const handlePrevBtn = () => {
	if (currentStep !== 1) {
		currentStep--;
		changeProgressBar();
		handleCurrentPage();
	}
	//after potential change
	if (currentStep === 1) {
		prevBtn.disabled = true;
	} else if (currentStep === steps.length - 1) {
		nextBtn.disabled = false;
	}
};

const handleNextBtn = () => {
	if (currentStep !== steps.length) {
		currentStep++;
		changeProgressBar();
		handleCurrentPage();
	}
	//after potential change
	if (currentStep === steps.length) {
		nextBtn.disabled = true;
	} else if (currentStep === 2) {
		prevBtn.disabled = false;
	}
};

const changeProgressBar = () => {
	// 	color steps
	steps.forEach((step, index) => {
		if (index < currentStep) {
			step.classList.add('active-step');
		} else {
			step.classList.remove('active-step');
		}
	});
	// 	color progress bar
	const activeSteps = document.querySelectorAll('.active-step');
	let progressPercent = ((activeSteps.length - 1) / (steps.length - 1)) * 100;
	progressBar.style.width = progressPercent + '%';
};

const handleCurrentPage = () => {
	formPages.forEach(page => {
		if (currentStep == page.dataset.number) {
			page.classList.add('active-page');
		} else {
			page.classList.remove('active-page');
		}
	});
};

prevBtn.addEventListener('click', handlePrevBtn);
nextBtn.addEventListener('click', handleNextBtn);
