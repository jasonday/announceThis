# announceThis
Accessibility messaging system for screenreaders; easy aria-live regions

## Usage
### Alert
```javascript
	$.announceThis({
        role: 'alert',
        message: 'This is an example of an alert message'
    });
```

### Status
```javascript
	$.announceThis({
        id: 'statusContainer',
        role: 'status',
        ariaLive: 'assertive'
        message: 'This is an example of an updated status message',
        ariaRelevant: 'additions removals'
    });
```

### All options
```javascript
	$.announceThis.defaults = {
        id: "announceThis",       // id of live region
        role: "status",           // log, alert, status, progressbar, marquee, timer
        ariaLive: "assertive",    // polite, assertive, alert (automatically becomes "alert" when role: "alert")
        ariaAtomic: false,        // present live region as a whole (support across screenreader/browser combinations is sketchy)
        ariaRelevant: "",         // 'additions', 'additions removals', 'removals' - does not work with role: alert
        message: ""               // message to pass to screenreader
    };
```

## Known Issues
* 'aria-atomic' is flaky across different browser/screenreader combinations - reading: http://terrillthompson.com/tests/aria/live-scores.html
