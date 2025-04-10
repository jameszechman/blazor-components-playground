using Microsoft.JSInterop;
using Microsoft.AspNetCore.Components;

namespace LarsaComponents.Components;

/// <summary>
/// Dialog component for displaying modal dialogs.
/// </summary>
public partial class Dialog
{
    /// <summary>
    /// The ID of the dialog. If not provided, a new GUID will be generated.
    /// </summary>
    [Parameter]
    public string Id { get; set; } = Guid.NewGuid().ToString();

    /// <summary>
    /// The modal string trigger for opening the dialog.
    /// </summary>
    [Parameter]
    public string OpenTrigger { get; set; } // [3]

    /// <summary>
    /// The modal string trigger for closing the dialog.
    /// </summary>
    [Parameter]
    public string CloseTrigger { get; set; } // [4]

    /// <summary>
    /// The CSS class to be applied when the dialog is open.
    /// </summary>
    [Parameter]
    public string OpenClass { get; set; } // [5]

    /// <summary>
    /// Whether or Not to disable scrolling when the dialog is open.
    /// This is useful for preventing background scrolling when the modal is open.
    /// </summary>
    [Parameter]
    public bool DisableScroll { get; set; } = true; // [6]

    /// <summary>
    /// Whether or Not to disable focus on the dialog when it is open.
    /// This is useful for preventing focus on the modal when it is open.
    /// </summary>
    [Parameter]
    public bool DisableFocus { get; set; } = false; // [7]

    /// <summary>
    /// Whether or Not to await the open animation to finish before executing the next line of code.
    /// </summary>
    [Parameter]
    public bool AwaitOpenAnimation { get; set; } // [8]

    /// <summary>
    /// Whether or Not to await the close animation to finish before executing the next line of code.
    /// </summary>
    [Parameter]
    public bool AwaitCloseAnimation { get; set; } // [9]

    /// <summary>
    /// Whether or Not to enable debug mode.
    /// </summary>
    [Parameter]
    public bool DebugMode { get; set; } // [10]

    /// <summary>
    /// The content to be displayed inside the dialog.
    /// </summary>
    [Parameter]
    public RenderFragment? ChildContent { get; set; }

    /// <summary>
    /// The EventCallback to be invoked when the dialog is closed.
    /// </summary>
    [Parameter]
    public EventCallback<bool> OnClose { get; set; }

    /// <summary>
    /// The EventCallback to be invoked when the dialog is opened.
    /// </summary>
    [Parameter] 
    public EventCallback<bool> OnOpen { get; set; }

    /// <summary>
    /// The Open State of the dialog.
    /// </summary>
    [Parameter]
    public bool IsOpen { get; set; } = false;

    /// <summary>
    /// The Closed State of the dialog
    /// </summary>
    [Parameter]
    public bool IsClosed { get; set; } = false;

    [JSInvokable]
    public async Task HandleOnOpen()
    {
        IsOpen = true;
        await OnOpen.InvokeAsync(IsOpen);
    }

    [JSInvokable]
    public async Task HandleOnClose()
    {
        IsOpen = false;
        await OnClose.InvokeAsync(IsOpen);
    }

    public void OpenModal()
    {
        var options = new Dictionary<string, object>();

        if (!string.IsNullOrEmpty(OpenTrigger)) options["openTrigger"] = OpenTrigger;
        if (!string.IsNullOrEmpty(CloseTrigger)) options["closeTrigger"] = CloseTrigger;
        if (!string.IsNullOrEmpty(OpenClass)) options["openClass"] = OpenClass;
        if (DisableScroll) options["disableScroll"] = DisableScroll;
        if (DisableFocus) options["disableFocus"] = DisableFocus;
        if (AwaitOpenAnimation) options["awaitOpenAnimation"] = AwaitOpenAnimation;
        if (AwaitCloseAnimation) options["awaitCloseAnimation"] = AwaitCloseAnimation;
        if (DebugMode) options["debugMode"] = DebugMode;

        JSRuntime.InvokeVoidAsync(
            "LarsaComponents.openModal",
            Id,
            DotNetObjectReference.Create(this),
            options
        );
        // OnOpen.InvokeAsync(IsOpen); - We Want to Invoke this In JavaScript
    }
    public void CloseModal()
    {
        JSRuntime.InvokeVoidAsync("LarsaComponents.closeModal", Id);
        // OnClose.InvokeAsync(IsOpen); - We Want to Invoke this In JavaScript
    }
    public void ToggleModal()
    {
        if (IsOpen)
        {
            CloseModal();
        }
        else
        {
            OpenModal();
        }
    }
}
