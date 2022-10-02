import React from 'react';

class ThemeSetter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: this.themeGetter() // Default Theme Light
        };
    }

    themeGetter() {
        if (!localStorage.getItem('theme') || localStorage.getItem('theme') == 'light') {
            document.body.classList.add('is-light');
            return 'light';
        } else {
            document.body.classList.add('is-dark');
            return 'dark';
        }
    }

    themeSetter(theme) {
        localStorage.setItem('theme', theme);
    }

    setIcon() {
        if (this.state.theme == 'light') {
            return 'bi-moon-fill';
        } else {
            return 'bi-brightness-high';
        }
    }

    changeTheme() {
        if (this.state.theme == 'light') {
            console.log('theme sets dark');
            this.setState({
                theme: 'dark'
            })
            this.themeSetter('dark');
            document.body.classList.remove('is-light');
            document.body.classList.add('is-dark');
            document.getElementById('theme-toggler').classList.remove('bi-moon-fill');
            document.getElementById('theme-toggler').classList.add('bi-brightness-high');
        } else {
            console.log('theme sets light');
            this.setState({
                theme: 'light'
            })
            this.themeSetter('light');
            document.body.classList.remove('is-dark');
            document.body.classList.add('is-light');
            document.getElementById('theme-toggler').classList.remove('bi-brightness-high');
            document.getElementById('theme-toggler').classList.add('bi-moon-fill');
        }
    }

    render() {
        return (
            <div className='theme-toggle'>
                <i
                    className={this.setIcon()}
                    onLoad={() => {
                        this.themeGetter()
                    }}
                    onClick={() => {
                        this.changeTheme()
                    }}
                    id='theme-toggler'
                ></i>
            </div >
        )
    }
}

export default ThemeSetter;