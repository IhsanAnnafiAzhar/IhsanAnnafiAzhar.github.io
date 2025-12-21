// Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Initialize quiz if we're on a quiz page
    if (typeof quizData !== 'undefined') {
        initializeQuiz();
    }

    // Add smooth scrolling and animations
    addScrollAnimations();
});

function typesetMath() {
    if (window.MathJax && window.MathJax.typesetPromise) {
        window.MathJax.typesetPromise();
    }
}

// Quiz Functionality
function initializeQuiz() {
    let currentQuestion = 0;
    let userAnswers = [];
    let showingResults = false;

    const questionsContainer = document.getElementById('quiz-questions');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');
    const resultsContainer = document.getElementById('quiz-results');
    const progressFill = document.getElementById('progress-fill');
    const currentQuestionSpan = document.getElementById('current-question');

    // Initialize answers array
    userAnswers = new Array(quizData.questions.length).fill(null);

    // Show first question
    showQuestion(currentQuestion);

    // Event listeners
    prevBtn.addEventListener('click', () => {
        if (currentQuestion > 0) {
            currentQuestion--;
            showQuestion(currentQuestion);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentQuestion < quizData.questions.length - 1) {
            currentQuestion++;
            showQuestion(currentQuestion);
        }
    });

    submitBtn.addEventListener('click', () => {
        showResults();
    });

    function showQuestion(index) {
        const question = quizData.questions[index];
        const isAnswered = userAnswers[index] !== null;
        
        questionsContainer.innerHTML = `
            <div class="question-card fade-in-up">
                <div class="question-title">${question.question}</div>
                <div class="options">
                    ${question.options.map((option, optionIndex) => {
                        let optionClass = '';
                        if (isAnswered) {
                            if (optionIndex === question.correct) {
                                optionClass = 'correct';
                            } else if (optionIndex === userAnswers[index] && optionIndex !== question.correct) {
                                optionClass = 'incorrect';
                            }
                        } else if (userAnswers[index] === optionIndex) {
                            optionClass = 'selected';
                        }
                        
                        return `
                            <div class="option ${optionClass}" 
                                 data-option="${optionIndex}"
                                 ${isAnswered ? 'style="pointer-events: none;"' : ''}>
                                ${option}
                                ${isAnswered && optionIndex === question.correct ? '<i class="fas fa-check-circle"></i>' : ''}
                                ${isAnswered && optionIndex === userAnswers[index] && optionIndex !== question.correct ? '<i class="fas fa-times-circle"></i>' : ''}
                            </div>
                        `;
                    }).join('')}
                </div>
                ${isAnswered ? `
                    <div class="explanation">
                        <div class="explanation-header">
                            <i class="fas fa-lightbulb"></i>
                            <strong>Explanation:</strong>
                        </div>
                        <p>${question.explanation}</p>
                        ${userAnswers[index] === question.correct ? 
                            '<div class="feedback correct-feedback"><i class="fas fa-check"></i> Correct!</div>' : 
                            '<div class="feedback incorrect-feedback"><i class="fas fa-times"></i> Incorrect. The correct answer is: ' + question.options[question.correct] + '</div>'
                        }
                    </div>
                ` : ''}
            </div>
        `;

        typesetMath();

        // Add click handlers to options only if not answered
        if (!isAnswered) {
            const options = questionsContainer.querySelectorAll('.option');
            options.forEach((option, optionIndex) => {
                option.addEventListener('click', () => {
                    // Store answer
                    userAnswers[index] = optionIndex;
                    
                    // Re-render question with explanation
                    showQuestion(index);
                    
                    // Update navigation buttons
                    updateNavigationButtons();
                });
            });
        }

        // Update progress
        updateProgress();
        updateNavigationButtons();
    }

    function updateProgress() {
        const progress = ((currentQuestion + 1) / quizData.questions.length) * 100;
        progressFill.style.width = `${progress}%`;
        currentQuestionSpan.textContent = currentQuestion + 1;
    }

    function updateNavigationButtons() {
        // Previous button
        prevBtn.disabled = currentQuestion === 0;
        
        // Next/Submit button logic
        const isLastQuestion = currentQuestion === quizData.questions.length - 1;
        const hasAnswer = userAnswers[currentQuestion] !== null;
        
        if (isLastQuestion) {
            nextBtn.style.display = 'none';
            submitBtn.style.display = hasAnswer ? 'inline-flex' : 'none';
        } else {
            nextBtn.style.display = hasAnswer ? 'inline-flex' : 'none';
            submitBtn.style.display = 'none';
        }
        
        nextBtn.disabled = !hasAnswer;
        submitBtn.disabled = userAnswers.includes(null);
    }

    function showResults() {
        let correctAnswers = 0;
        
        // Calculate score
        quizData.questions.forEach((question, index) => {
            if (userAnswers[index] === question.correct) {
                correctAnswers++;
            }
        });

        const percentage = Math.round((correctAnswers / quizData.questions.length) * 100);
        const incorrectAnswers = quizData.questions.length - correctAnswers;

        // Update results display
        document.getElementById('score-percentage').textContent = `${percentage}%`;
        document.getElementById('correct-answers').textContent = correctAnswers;
        document.getElementById('incorrect-answers').textContent = incorrectAnswers;

        // Set results message
        let message = '';
        if (percentage >= 90) {
            message = '🎉 Excellent! You have great knowledge of traffic safety!';
        } else if (percentage >= 80) {
            message = '👍 Great job! You know your traffic rules well!';
        } else if (percentage >= 70) {
            message = '👌 Good work! Keep learning to improve your safety knowledge.';
        } else if (percentage >= 60) {
            message = '📚 Not bad! Review the safety tips and try again.';
        } else {
            message = '🚨 Please study traffic safety rules more carefully and retake the quiz.';
        }

        document.getElementById('results-message').textContent = message;

        // Add detailed review section
        const reviewHtml = `
            <div class="quiz-review">
                <h3><i class="fas fa-list-check"></i> Detailed Review</h3>
                <div class="review-questions">
                    ${quizData.questions.map((question, index) => {
                        const isCorrect = userAnswers[index] === question.correct;
                        const userAnswer = question.options[userAnswers[index]];
                        const correctAnswer = question.options[question.correct];
                        
                        return `
                            <div class="review-question ${isCorrect ? 'correct' : 'incorrect'}">
                                <div class="review-header">
                                    <span class="question-number">Question ${index + 1}</span>
                                    <span class="result-icon">
                                        ${isCorrect ? '<i class="fas fa-check-circle"></i>' : '<i class="fas fa-times-circle"></i>'}
                                    </span>
                                </div>
                                <h4>${question.question}</h4>
                                <div class="answer-comparison">
                                    <div class="user-answer">
                                        <strong>Your answer:</strong> ${userAnswer}
                                        ${isCorrect ? '<span class="correct-badge">✓</span>' : '<span class="incorrect-badge">✗</span>'}
                                    </div>
                                    ${!isCorrect ? `
                                        <div class="correct-answer">
                                            <strong>Correct answer:</strong> ${correctAnswer}
                                        </div>
                                    ` : ''}
                                </div>
                                <div class="explanation-text">
                                    <strong>Explanation:</strong> ${question.explanation}
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;

        // Insert review section before the retry buttons
        const resultsDetails = document.querySelector('.results-details');
        const existingReview = resultsDetails.querySelector('.quiz-review');
        if (existingReview) {
            existingReview.remove();
        }
        
        const buttons = resultsDetails.querySelector('.btn');
        buttons.parentNode.insertAdjacentHTML('beforebegin', reviewHtml);

        typesetMath();

        // Hide quiz content and show results
        document.querySelector('.quiz-content').style.display = 'none';
        resultsContainer.style.display = 'block';
        resultsContainer.scrollIntoView({ behavior: 'smooth' });
    }
}

// Scroll Animations
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.feature-card, .blog-card, .quiz-container');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(element);
    });
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Search functionality (if needed later)
function searchContent(query) {
    // Implementation for search if needed
    console.log('Searching for:', query);
}

// Form validation (if needed later)
function validateForm(form) {
    // Implementation for form validation if needed
    return true;
}

// Local storage utilities for saving quiz progress
const QuizStorage = {
    save: function(key, data) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
        } catch (e) {
            console.warn('Local storage not available');
        }
    },
    
    load: function(key) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : null;
        } catch (e) {
            console.warn('Local storage not available');
            return null;
        }
    },
    
    remove: function(key) {
        try {
            localStorage.removeItem(key);
        } catch (e) {
            console.warn('Local storage not available');
        }
    }
};

// Performance optimization: Lazy load images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', lazyLoadImages);
} else {
    lazyLoadImages();
}
