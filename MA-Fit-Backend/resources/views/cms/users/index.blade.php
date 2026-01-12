{{-- resources/views/cms/users/index.blade.php --}}
@extends('layouts.cms') {{-- pas aan naar jouw layout --}}
@section('content')

<div class="container">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
        <div>
            <h1>Users</h1>
            <p style="margin:0; color:#666;">Overzicht + beheren</p>
        </div>

        <a href="{{ route('cms.users.create') }}" class="btn btn-primary">
            + Nieuwe user
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
                    <th>Naam</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th style="text-align:right;">Acties</th>
                </tr>
            </thead>

            <tbody>
                @forelse($users as $user)
                    <tr>
                        <td>{{ $user->id }}</td>
                        <td><strong>{{ $user->name }}</strong></td>
                        <td>{{ $user->email }}</td>
                        <td>{{ $user->role }}</td>
                        <td style="text-align:right; white-space:nowrap;">
                            <a href="{{ route('cms.users.edit', $user) }}" class="btn btn-sm btn-outline-secondary">
                                Aanpassen
                            </a>

                            <form action="{{ route('cms.users.destroy', $user) }}"
                                  method="POST"
                                  style="display:inline-block;"
                                  onsubmit="return confirm('Weet je zeker dat je deze user wilt verwijderen?');">
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
                            Geen Users gevonden.
                        </td>
                    </tr>
                @endforelse
            </tbody>
        </table>
    </div>
</div>

@endsection
