const { execSync } = require('child_process');
const port = process.argv[2] || '3000';

try {
  const output = execSync(`netstat -ano | findstr :${port}`, { encoding: 'utf8' });
  const lines = output.trim().split('\n').filter(l => l.includes('LISTENING'));
  for (const line of lines) {
    const parts = line.trim().split(/\s+/);
    const pid = parts[parts.length - 1];
    if (pid && pid !== '0') {
      execSync(`taskkill /F /PID ${pid}`, { stdio: 'inherit' });
    }
  }
} catch {
}
