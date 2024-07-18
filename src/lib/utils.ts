import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export class Timer {
  private _start: Date;
  private _remaining: number;
  private _durationTimeoutId?: NodeJS.Timeout;
  private _callback: (...args: any[]) => void;
  private _done = false;
  get done() {
    return this._done;
  }

  constructor(callback: (...args: any[]) => void, ms = 0) {
    this._start = new Date();
    this._callback = () => {
      callback();
      this._done = true;
    };
    this._remaining = ms;
    this.resume();
  }

  pause(): Timer {
    if (this._durationTimeoutId && !this._done) {
      this._clearTimeoutRef();
      this._remaining -= new Date().getTime() - this._start.getTime();
    }
    return this;
  }

  resume(): Timer {
    if (!this._durationTimeoutId && !this._done) {
      this._start = new Date();
      this._durationTimeoutId = setTimeout(this._callback, this._remaining);
    }
    return this;
  }

  clearTimeout() {
    this._clearTimeoutRef();
    this._done = true;
  }

  private _clearTimeoutRef() {
    if (this._durationTimeoutId) {
      clearTimeout(this._durationTimeoutId);
      this._durationTimeoutId = undefined;
    }
  }
}
