{{-- resources/views/cms/users/index.blade.php --}}
@extends('layouts.cms')
@section('content')

<div class="container">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
        <div>
            <h1>Notifications</h1>
            <p style="margin:0; color:#666;">Overzicht + beheren</p>
        </div>

        <a href="{{ route('cms.notifications.create') }}" class="btn btn-primary">
            + Nieuwe Notification
        </a>
    </div>

    @if(session('success'))
        <div class="alert alert-success">
            {{ session('success') }}
        </div>
    @endif

    <div style="overflow-x:auto;">
        <table class="table table-striped align-middle">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Content</th>
                    <th style="text-align:right;">Acties</th>
                </tr>
            </thead>

            <tbody>
                @forelse($notifications as $notification)
                    <tr>
                        <td>{{ $notification->id }}</td>
                        <td><strong>{{ $notification->title }}</strong></td>
                        <td>{{ $notification->content }}</td>
                        <td style="text-align:right; white-space:nowrap;">
                            <a href="{{ route('cms.notifications.edit', $notification) }}" class="btn btn-sm btn-outline-secondary">
                                Aanpassen
                            </a>

                            <form action="{{ route('cms.notifications.destroy', $notification) }}"
                                  method="POST"
                                  style="display:inline-block;"
                                  onsubmit="return confirm('Weet je zeker dat je deze notification wilt verwijderen?');">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="btn btn-sm btn-outline-danger">
                                    Verwijderen
                                </button>
                            </form>
                        </td>
                    </tr>
                @empty
                    <tr>
                        <td colspan="7" style="padding:24px; color:#666;">
                            Geen notifications gevonden.
                        </td>
                    </tr>
                @endforelse
            </tbody>
        </table>
    </div>
</div>

@endsection
