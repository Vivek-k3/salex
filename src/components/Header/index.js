export default function Header() {
    return (
        <header>
            <div className="flex items-center justify-between">
                <div>
                    <input type="text" name="search" id="globalSearch" />
                </div>
                <div className="flex items-center justify-end">
                    <p>sett</p>
                    <p>noti</p>
                    <p>mess</p>
                    <p>bar</p>
                    <div>profile</div>
                </div>
            </div>
        </header>
    );
}
